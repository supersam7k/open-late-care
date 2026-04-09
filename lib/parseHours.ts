// Parses hours strings like:
//   "Mon–Sun 8am–8pm"
//   "Mon–Fri 8am–5pm, Sat 8am–12pm"
//   "Mon–Fri 8am–5pm, Sat–Sun Closed"
//   "Mon–Sun 12pm–10pm"

const DAY: Record<string, number> = {
  Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0,
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
