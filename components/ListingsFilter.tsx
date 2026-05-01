"use client";

import { useState } from "react";
import type { Listing } from "@/lib/cityListings";
import { isOpenNow, isOpenWeekends, isOpenLate } from "@/lib/parseHours";
import { OpenNowBadge } from "@/components/OpenNowBadge";

type Filter = "open-now" | "open-weekends" | "open-late";

const FILTERS: { id: Filter; label: string; description: string }[] = [
  { id: "open-now",      label: "Open Now",      description: "Currently accepting patients" },
  { id: "open-weekends", label: "Open Weekends",  description: "Open Saturday and/or Sunday" },
  { id: "open-late",     label: "Open Late",      description: "Open until 9pm or later" },
];

function matchesFilter(listing: Listing, filter: Filter): boolean {
  if (filter === "open-now")      return isOpenNow(listing.hours);
  if (filter === "open-weekends") return isOpenWeekends(listing.hours);
  if (filter === "open-late")     return isOpenLate(listing.hours);
  return true;
}

export function ListingsFilter({ listings }: { listings: Listing[] }) {
  const [active, setActive] = useState<Filter | null>(null);

  const filtered = active
    ? listings.filter((l) => matchesFilter(l, active))
    : listings;

  function toggle(f: Filter) {
    setActive((prev) => (prev === f ? null : f));
  }

  return (
    <>
      {/* Filter bar */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ margin: "0 0 10px", fontWeight: 600, color: "#1a1a1a" }}>Filter clinics:</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => toggle(f.id)}
              title={f.description}
              style={{
                padding: "8px 16px",
                borderRadius: 24,
                border: "1.5px solid",
                borderColor: active === f.id ? "#0070f3" : "#d0d0d0",
                background: active === f.id ? "#0070f3" : "#fff",
                color: active === f.id ? "#fff" : "#333",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {f.label}
            </button>
          ))}
          {active && (
            <button
              onClick={() => setActive(null)}
              style={{
                padding: "8px 16px",
                borderRadius: 24,
                border: "1.5px solid #d0d0d0",
                background: "transparent",
                color: "#666",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        background: "#fffbeb",
        border: "1px solid #fcd34d",
        borderRadius: 8,
        padding: "12px 16px",
        marginBottom: 16,
        fontSize: "0.875rem",
        color: "#78350f",
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
      }}>
        <span style={{ flexShrink: 0 }}>⚠️</span>
        <span>
          <strong>Always call ahead to verify hours and availability.</strong> Clinic information on this site
          may be outdated or inaccurate. Do not rely solely on this listing — confirm directly with the clinic
          before visiting. For medical emergencies, call 911.
        </span>
      </div>

      {/* Insurance info callout */}
      <div style={{
        background: "#f0f9ff",
        border: "1px solid #bae0fd",
        borderRadius: 8,
        padding: "12px 16px",
        marginBottom: 24,
        fontSize: "0.875rem",
        color: "#1a1a1a",
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
      }}>
        <span style={{ flexShrink: 0 }}>ℹ️</span>
        <span>
          <strong>Insurance:</strong> Most urgent care centers accept major PPO/HMO plans, Medicare, and Medicaid.
          Coverage varies — call the clinic directly to confirm your plan is accepted before your visit.
        </span>
      </div>

      {/* Results count */}
      {active && (
        <p style={{ margin: "0 0 16px", color: "#555", fontSize: "0.9rem" }}>
          Showing {filtered.length} of {listings.length} clinics
        </p>
      )}

      {/* Listing cards */}
      {filtered.length === 0 ? (
        <div style={{
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: "32px",
          textAlign: "center",
          color: "#666",
        }}>
          <p style={{ margin: 0 }}>No clinics match this filter right now. Try a different filter or check back later.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 20 }}>
          {filtered.map((listing, i) => (
            <div key={i} className="listing-card">
              <h2 style={{ margin: "0 0 6px", fontSize: "1.1rem", color: "#1a1a1a" }}>
                {listing.name}
                <OpenNowBadge hours={listing.hours} />
              </h2>

              {listing.rating !== undefined && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <StarRating rating={listing.rating} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1a1a" }}>
                    {listing.rating.toFixed(1)}
                  </span>
                  {listing.reviewCount !== undefined && (
                    <span style={{ fontSize: "0.8rem", color: "#666" }}>
                      ({listing.reviewCount.toLocaleString()} reviews)
                    </span>
                  )}
                  {listing.placeId && (
                    <a
                      href={`https://search.google.com/local/reviews?placeid=${listing.placeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.78rem", color: "#0070f3", marginLeft: 2 }}
                    >
                      Google reviews ↗
                    </a>
                  )}
                </div>
              )}

              <div style={{ display: "grid", gap: 6, color: "#444", fontSize: "0.95rem" }}>
                <div><strong>Address:</strong> {listing.address}</div>
                <div>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${listing.phone.replace(/[^+\d]/g, "")}`} style={{ color: "#0070f3" }}>
                    {listing.phone}
                  </a>
                </div>
                <div><strong>Hours:</strong> {listing.hours}</div>
                {listing.website && (
                  <div>
                    <strong>Website:</strong>{" "}
                    <a href={listing.website} target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>
                      {new URL(listing.website).hostname.replace(/^www\./, "")}
                    </a>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${listing.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    background: "#0070f3",
                    color: "#fff",
                    borderRadius: 6,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  Get Directions
                </a>
                {listing.website && (
                  <a
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      background: "#fff",
                      color: "#333",
                      border: "1.5px solid #d0d0d0",
                      borderRadius: 6,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    Visit Website
                  </a>
                )}
                {isOpenWeekends(listing.hours) && (
                  <span style={{ fontSize: "0.8rem", color: "#555", background: "#f5f5f5", padding: "4px 10px", borderRadius: 12 }}>
                    Open Weekends
                  </span>
                )}
                {isOpenLate(listing.hours) && (
                  <span style={{ fontSize: "0.8rem", color: "#555", background: "#f5f5f5", padding: "4px 10px", borderRadius: 12 }}>
                    Open Late
                  </span>
                )}
                <a
                  href={`mailto:corrections@urgentcarenearme24.com?subject=Incorrect listing: ${encodeURIComponent(listing.name)}&body=Clinic: ${encodeURIComponent(listing.name)}%0AAddress: ${encodeURIComponent(listing.address)}%0A%0AWhat's incorrect:%0A`}
                  style={{ fontSize: "0.8rem", color: "#999", marginLeft: "auto" }}
                >
                  Report incorrect info
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function StarRating({ rating }: { rating: number }) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span style={{ color: "#f59e0b", fontSize: "0.95rem", letterSpacing: 1 }}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}
