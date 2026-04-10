"use client";

import { useState } from "react";
import type { CityData } from "@/lib/cityListings";

export function CitySearch({ cities }: { cities: CityData[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? cities.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    : cities;

  return (
    <>
      <div style={{ position: "relative", marginBottom: 20 }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#999",
          fontSize: "1rem",
          pointerEvents: "none",
        }}>
          🔍
        </span>
        <input
          type="text"
          placeholder="Search a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px 10px 36px",
            border: "1.5px solid #d0d0d0",
            borderRadius: 8,
            fontSize: "1rem",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.15s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
          onBlur={(e) => (e.target.style.borderColor = "#d0d0d0")}
        />
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: "#666", textAlign: "center", padding: "24px 0" }}>
          No cities found for &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {filtered.map((city) => (
            <a key={city.slug} href={`/${city.slug}/urgent-care-open-now/`} className="city-card">
              {city.name} →
            </a>
          ))}
        </div>
      )}
    </>
  );
}
