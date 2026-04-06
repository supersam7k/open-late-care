export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Find Urgent Care Near You (Open Now)</h1>

      <p>
        Looking for urgent care near you that’s open right now? We help you quickly find nearby urgent care centers with updated hours and locations.
      </p>

      <h2>Browse by City</h2>
      <ul>
        <li>
          <a href="/los-angeles/urgent-care-open-now/">
            Los Angeles Urgent Care Open Now
          </a>
        </li>
      </ul>

      <h2>Why Use This Site?</h2>
      <ul>
        <li>Find urgent care clinics open late</li>
        <li>Quick access to nearby locations</li>
        <li>Simple and fast navigation</li>
      </ul>

      <p>More cities coming soon.</p>
    </main>
  );
}