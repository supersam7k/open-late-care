import { cities } from "@/lib/cityListings";

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Find Urgent Care Near You (Open Now)</h1>

      <p>
        Looking for urgent care near you that&apos;s open right now? We help you quickly find nearby urgent care centers with updated hours and locations.
      </p>

      <h2>Browse by City</h2>
      <ul style={{ lineHeight: "2" }}>
        {cities.map((city) => (
          <li key={city.slug}>
            <a href={`/${city.slug}/urgent-care-open-now/`}>
              {city.name} Urgent Care Open Now
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
