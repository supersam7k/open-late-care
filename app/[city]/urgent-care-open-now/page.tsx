import { notFound } from "next/navigation";
import { cities, getCityListings, getCityName } from "@/lib/cityListings";
import { cityDescriptions } from "@/lib/cityDescriptions";
import { toSchemaOpeningHours } from "@/lib/parseHours";
import { ListingsFilter } from "@/components/ListingsFilter";
import { BackToTop } from "@/components/BackToTop";

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

function parseAddress(address: string) {
  const parts = address.split(",").map((s) => s.trim());
  const stateZip = (parts[2] ?? "").trim().split(/\s+/);
  return {
    "@type": "PostalAddress",
    streetAddress: parts[0] ?? address,
    addressLocality: parts[1] ?? "",
    addressRegion: stateZip[0] ?? "",
    postalCode: stateZip[1] ?? "",
    addressCountry: "US",
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  const cityName = getCityName(city);
  const listings = getCityListings(city);
  const description = cityDescriptions[city];

  if (!cityName || !listings) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Urgent Care Open Now in ${cityName}`,
    itemListElement: listings.map((listing, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalClinic",
        name: listing.name,
        address: parseAddress(listing.address),
        telephone: listing.phone,
        openingHours: toSchemaOpeningHours(listing.hours),
        hasMap: `https://www.google.com/maps/dir/?api=1&destination=${listing.mapsQuery}`,
      },
    })),
  };

  const otherCities = cities.filter((c) => c.slug !== city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "20px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.85rem", color: "#888", marginBottom: 16 }}>
          <a href="/" style={{ color: "#0070f3" }}>Home</a>
          <span style={{ margin: "0 8px" }}>›</span>
          <span>{cityName}</span>
        </nav>

        <h1 style={{ marginBottom: 8 }}>Urgent Care Open Now in {cityName}</h1>

        {description && (
          <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 32 }}>
            {description}
          </p>
        )}

        <ListingsFilter listings={listings} />

        {/* City FAQ */}
        <section style={{ marginTop: 56 }}>
          <h2 style={{ margin: "0 0 20px" }}>Urgent Care in {cityName} — Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              {
                q: `Is urgent care open on weekends in ${cityName}?`,
                a: `Yes — most urgent care centers in ${cityName} are open on Saturdays and Sundays, typically from 8am to 8pm. Some locations have reduced Sunday hours, so check the listings above for exact weekend hours at each clinic.`,
              },
              {
                q: `Do I need an appointment for urgent care in ${cityName}?`,
                a: `No appointment is needed at most ${cityName} urgent care centers. Walk-ins are welcome at all locations listed above. Some clinics offer online check-in so you can hold your spot before you arrive and reduce your wait time.`,
              },
              {
                q: `How much does urgent care cost in ${cityName}?`,
                a: `A typical urgent care visit in ${cityName} costs between $100 and $200 without insurance for a basic exam. Additional services such as X-rays, lab tests, or stitches will increase the total. Most clinics will provide a cost estimate when you call, and many post self-pay rates on their website.`,
              },
              {
                q: `Does urgent care in ${cityName} accept insurance?`,
                a: `Most urgent care centers in ${cityName} accept major insurance plans including commercial insurance, Medicare, and Medicaid. Coverage and copays vary by plan and location, so call ahead to confirm your insurance is accepted before your visit.`,
              },
              {
                q: `What is the wait time at urgent care in ${cityName}?`,
                a: `Average wait times at ${cityName} urgent care centers are typically 15 to 45 minutes, though this varies by location and time of day. Early morning visits and weekday mornings tend to have the shortest waits. Using online check-in where available can also reduce your time in the waiting room.`,
              },
              {
                q: `What can urgent care treat in ${cityName}?`,
                a: `${cityName} urgent care centers treat a wide range of non-life-threatening conditions including colds, flu, infections, minor injuries, rashes, UTIs, and more. Many locations also provide X-rays, lab work, and vaccinations. For chest pain, difficulty breathing, or other emergencies, go to the nearest ER or call 911.`,
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 8, padding: "16px 20px" }}>
                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#1a1a1a" }}>{item.q}</p>
                <p style={{ margin: 0, color: "#555", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-city navigation */}
        <section style={{ marginTop: 56, borderTop: "1px solid #e0e0e0", paddingTop: 32 }}>
          <h2 style={{ marginBottom: 16 }}>Find Urgent Care in Other Cities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {otherCities.map((c) => (
              <a key={c.slug} href={`/${c.slug}/urgent-care-open-now/`} className="city-card" style={{ fontSize: "0.9rem" }}>
                {c.name} →
              </a>
            ))}
          </div>
        </section>
      </main>
      <BackToTop />
    </>
  );
}
