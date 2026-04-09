import { notFound } from "next/navigation";
import { cities, getCityListings, getCityName } from "@/lib/cityListings";
import { OpenNowBadge } from "@/components/OpenNowBadge";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const cityName = getCityName(city);
  if (!cityName) return {};

  return {
    title: `Urgent Care Open Now in ${cityName} (24 Hour & Late Night Clinics)`,
    description: `Find urgent care centers open now in ${cityName}. Browse locations, hours, and contact info for late-night and 24-hour urgent care clinics.`,
    alternates: {
      canonical: `/${city}/urgent-care-open-now/`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  const cityName = getCityName(city);
  const listings = getCityListings(city);

  if (!cityName || !listings) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "20px" }}>
      <h1 style={{ marginBottom: 8 }}>Urgent Care Open Now in {cityName}</h1>
      <p style={{ color: "#555", marginBottom: 32 }}>
        Find urgent care centers open now in {cityName}. Browse locations, hours, and contact information.
      </p>

      <div style={{ display: "grid", gap: 20 }}>
        {listings.map((listing, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: 8,
              padding: "20px 24px",
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ margin: "0 0 10px", fontSize: "1.1rem", color: "#1a1a1a" }}>
              {listing.name}
              <OpenNowBadge hours={listing.hours} />
            </h2>

            <div style={{ display: "grid", gap: 6, color: "#444", fontSize: "0.95rem" }}>
              <div>
                <strong>Address:</strong> {listing.address}
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${listing.phone.replace(/[^+\d]/g, "")}`} style={{ color: "#0070f3" }}>
                  {listing.phone}
                </a>
              </div>
              <div>
                <strong>Hours:</strong> {listing.hours}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
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
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
