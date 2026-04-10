// Parses hours strings like:
//   "Mon–Sun 8am–8pm"
//   "Mon–Fri 8am–5pm, Sat 8am–12pm"
//   "Mon–Fri 8am–5pm, Sat–Sun Closed"
//   "Mon–Sun 12pm–10pm"

const DAY: Record<string, number> = {
  Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0,
};

const SCHEMA_DAY: Record<string, string> = {
  Mon: "Mo", Tue: "Tu", Wed: "We", Thu: "Th", Fri: "Fr", Sat: "Sa", Sun: "Su",
};

function parseMinutes(t: string): number {
  const m = t.trim().match(/^(\d+)(am|pm)$/i);
  if (!m) return -1;
  let h = parseInt(m[1]);
  const meridiem = m[2].toLowerCase();
  if (meridiem === "pm" && h !== 12) h += 12;
  if (meridiem === "am" && h === 12) h = 0;
  return h * 60;
}

function dayInRange(day: number, start: number, end: number): boolean {
  if (start <= end) return day >= start && day <= end;
  // Wrapping range e.g. Mon(1)–Sun(0) covers all 7 days
  return day >= start || day <= end;
}

function timeToSchema(t: string): string {
  const m = t.trim().match(/^(\d+)(am|pm)$/i);
  if (!m) return "";
  let h = parseInt(m[1]);
  const meridiem = m[2].toLowerCase();
  if (meridiem === "pm" && h !== 12) h += 12;
  if (meridiem === "am" && h === 12) h = 0;
  return `${h.toString().padStart(2, "0")}:00`;
}

// Returns Schema.org openingHours strings e.g. ["Mo-Fr 08:00-17:00", "Sa 09:00-12:00"]
export function isOpenWeekends(hours: string): boolean {
  for (const segment of hours.split(",").map((s) => s.trim())) {
    const spaceIdx = segment.search(/\s/);
    if (spaceIdx === -1) continue;
    const dayPart = segment.slice(0, spaceIdx).trim();
    const timePart = segment.slice(spaceIdx).trim();
    if (timePart.toLowerCase() === "closed") continue;
    const dayParts = dayPart.split("–");
    const d0 = DAY[dayParts[0]?.trim()];
    const d1 = dayParts.length > 1 ? DAY[dayParts[1]?.trim()] : d0;
    if (d0 === undefined || d1 === undefined) continue;
    if (dayInRange(6, d0, d1) || dayInRange(0, d0, d1)) return true;
  }
  return false;
}

export function isOpenLate(hours: string): boolean {
  // "Open late" = closes at 9pm (21:00) or later on at least one day
  for (const segment of hours.split(",").map((s) => s.trim())) {
    const spaceIdx = segment.search(/\s/);
    if (spaceIdx === -1) continue;
    const timePart = segment.slice(spaceIdx).trim();
    if (timePart.toLowerCase() === "closed") continue;
    const timeParts = timePart.split("–");
    if (timeParts.length !== 2) continue;
    const close = parseMinutes(timeParts[1]);
    if (close >= 21 * 60) return true;
  }
  return false;
}

export function toSchemaOpeningHours(hours: string): string[] {
  const results: string[] = [];

  for (const segment of hours.split(",").map((s) => s.trim())) {
    const spaceIdx = segment.search(/\s/);
    if (spaceIdx === -1) continue;

    const dayPart = segment.slice(0, spaceIdx).trim();
    const timePart = segment.slice(spaceIdx).trim();

    if (timePart.toLowerCase() === "closed") continue;

    const dayParts = dayPart.split("–");
    const d0 = SCHEMA_DAY[dayParts[0]?.trim()];
    const d1 = dayParts.length > 1 ? SCHEMA_DAY[dayParts[1]?.trim()] : null;
    if (!d0) continue;
    const daySchema = d1 ? `${d0}-${d1}` : d0;

    const timeParts = timePart.split("–");
    if (timeParts.length !== 2) continue;

    const open = timeToSchema(timeParts[0]);
    const close = timeToSchema(timeParts[1]);
    if (!open || !close) continue;

    results.push(`${daySchema} ${open}-${close}`);
  }

  return results;
}

export function isOpenNow(hours: string): boolean {
  const now = new Date();
  const today = now.getDay();
  const nowMins = now.getHours() * 60 + now.getMinutes();

  for (const segment of hours.split(",").map((s) => s.trim())) {
    // Split on first space(s) to separate day part from time part
    const spaceIdx = segment.search(/\s/);
    if (spaceIdx === -1) continue;

    const dayPart = segment.slice(0, spaceIdx).trim();
    const timePart = segment.slice(spaceIdx).trim();

    // Parse day range — uses en-dash (–)
    const dayParts = dayPart.split("–");
    const dayStart = DAY[dayParts[0]?.trim()];
    const dayEnd = dayParts.length > 1 ? DAY[dayParts[1]?.trim()] : dayStart;
    if (dayStart === undefined || dayEnd === undefined) continue;

    if (!dayInRange(today, dayStart, dayEnd)) continue;

    if (timePart.toLowerCase() === "closed") return false;

    const timeParts = timePart.split("–");
    if (timeParts.length !== 2) continue;

    const open = parseMinutes(timeParts[0]);
    const close = parseMinutes(timeParts[1]);
    if (open === -1 || close === -1) continue;

    return nowMins >= open && nowMins < close;
  }

  return false;
}
