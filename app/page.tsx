import type { Metadata } from "next";
import { cities } from "@/lib/cityListings";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const faqItems = [
  {
    q: "What conditions can urgent care treat?",
    a: "Urgent care centers treat a wide range of non-life-threatening conditions including colds, flu, ear infections, minor cuts and lacerations, sprains and strains, urinary tract infections, rashes, mild asthma, and minor burns. Many locations also offer X-rays, lab tests, and vaccinations.",
  },
  {
    q: "How late are urgent care centers open?",
    a: "Most urgent care centers are open until 8pm or later on weekdays and weekends. Some locations offer extended hours until 10pm, and a smaller number operate 24 hours. Use the city listings above to find exact hours for clinics near you.",
  },
  {
    q: "Do I need an appointment for urgent care?",
    a: "Most urgent care centers accept walk-ins without an appointment, which is one of their main advantages over a primary care doctor. Some locations allow you to check in online or reserve a spot in line ahead of time.",
  },
  {
    q: "Does urgent care accept insurance?",
    a: "Most urgent care centers accept major insurance plans including commercial insurance, Medicare, and Medicaid. It is always a good idea to call ahead and confirm your specific plan is accepted. Many locations also offer transparent self-pay pricing if you are uninsured.",
  },
  {
    q: "How much does urgent care cost without insurance?",
    a: "A typical urgent care visit without insurance costs between $100 and $200 for a basic visit. Additional services like X-rays, lab work, or stitches will add to that cost. Many clinics post their self-pay rates online or will quote you a price when you call.",
  },
  {
    q: "Is urgent care faster than the emergency room?",
    a: "Yes, for non-emergency conditions urgent care is almost always faster and less expensive than an ER. Emergency rooms prioritize life-threatening cases, so wait times for minor issues can be several hours. Urgent care average wait times are typically 15 to 45 minutes.",
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>

      {/* Hero */}
      <h1>Find Urgent Care Open Now Near You</h1>
      <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.7 }}>
        Need medical attention today? Our directory lists urgent care centers in major US cities with up-to-date hours so you can find a clinic that is open right now — no appointment needed.
      </p>

      {/* City Directory */}
      <h2 style={{ marginTop: 40 }}>Browse Urgent Care by City</h2>
      <ul style={{ lineHeight: "2.2", columns: 2, columnGap: 40, paddingLeft: 20 }}>
        {cities.map((city) => (
          <li key={city.slug}>
            <a href={`/${city.slug}/urgent-care-open-now/`}>
              {city.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Urgent Care vs ER */}
      <h2 style={{ marginTop: 48 }}>Urgent Care vs. Emergency Room: Which Should You Choose?</h2>
      <p style={{ color: "#444", lineHeight: 1.7 }}>
        Knowing where to go when you are sick or injured can save you time, money, and stress. Here is a quick guide:
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 16 }}>
        <div style={{ background: "#f0f9ff", border: "1px solid #bae0fd", borderRadius: 8, padding: "16px 20px" }}>
          <h3 style={{ margin: "0 0 12px", color: "#0070f3" }}>Go to Urgent Care for:</h3>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 2, color: "#333" }}>
            <li>Colds, flu, fever</li>
            <li>Ear or sinus infections</li>
            <li>Minor cuts needing stitches</li>
            <li>Sprains and minor fractures</li>
            <li>Urinary tract infections</li>
            <li>Rashes and skin infections</li>
            <li>Mild asthma or allergic reactions</li>
            <li>X-rays and lab tests</li>
          </ul>
        </div>
        <div style={{ background: "#fff5f5", border: "1px solid #fcc", borderRadius: 8, padding: "16px 20px" }}>
          <h3 style={{ margin: "0 0 12px", color: "#dc2626" }}>Go to the ER for:</h3>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 2, color: "#333" }}>
            <li>Chest pain or pressure</li>
            <li>Difficulty breathing</li>
            <li>Signs of stroke</li>
            <li>Severe head injury</li>
            <li>Heavy or uncontrolled bleeding</li>
            <li>Loss of consciousness</li>
            <li>Severe allergic reaction</li>
            <li>Poisoning or overdose</li>
          </ul>
        </div>
      </div>
      <p style={{ color: "#666", fontSize: "0.9rem", marginTop: 12 }}>
        If you are unsure whether your situation is an emergency, call 911 or go to your nearest ER. When in doubt, err on the side of caution.
      </p>

      {/* What to Expect */}
      <h2 style={{ marginTop: 48 }}>What to Expect at an Urgent Care Visit</h2>
      <p style={{ color: "#444", lineHeight: 1.7 }}>
        Urgent care centers are designed to get you in and out quickly. Most visits follow this process:
      </p>
      <ol style={{ color: "#444", lineHeight: 2, paddingLeft: 20 }}>
        <li><strong>Check in</strong> — Walk in or check in online at some locations. Bring your insurance card and a photo ID.</li>
        <li><strong>Triage</strong> — A nurse or medical assistant will take your vitals and note your symptoms.</li>
        <li><strong>See a provider</strong> — A physician, nurse practitioner, or physician assistant will examine you. Average wait time is 15–45 minutes.</li>
        <li><strong>Treatment</strong> — You may receive treatment on-site, a prescription, lab work, or a referral depending on your condition.</li>
        <li><strong>Discharge</strong> — You will receive discharge instructions and can typically follow up with your primary care doctor if needed.</li>
      </ol>

      {/* FAQ */}
      <h2 style={{ marginTop: 48 }}>Frequently Asked Questions</h2>
      <div style={{ display: "grid", gap: 16, marginTop: 8 }}>
        {faqItems.map((item, i) => (
          <div key={i} style={{ borderLeft: "3px solid #0070f3", paddingLeft: 16 }}>
            <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#1a1a1a" }}>{item.q}</p>
            <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>{item.a}</p>
          </div>
        ))}
      </div>

    </main>
  );
}
