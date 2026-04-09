"use client";

import { useState, useEffect } from "react";
import { isOpenNow } from "@/lib/parseHours";

export function OpenNowBadge({ hours }: { hours: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow(hours));
  }, [hours]);

  if (open === null) return null;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 4,
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.03em",
        background: open ? "#16a34a" : "#dc2626",
        color: "#fff",
        verticalAlign: "middle",
        marginLeft: 10,
      }}
    >
      {open ? "Open Now" : "Closed"}
    </span>
  );
}
