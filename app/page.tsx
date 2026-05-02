import type { Metadata } from "next";
import { cities } from "@/lib/cityListings";
import { CitySearch } from "@/components/CitySearch";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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

const features = [
  { src: "/images/Icon_1.png", label: "Open Now" },
  { src: "/images/Icon_2.png", label: "Walk-Ins Welcome" },
  { src: "/images/Icon_4.png", label: "Compassionate Care" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          backgroundImage: "url(/images/HeroBanner_2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          minHeight: 480,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Dark overlay so text is readable */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,30,80,0.82) 0%, rgba(0,30,80,0.55) 60%, rgba(0,0,0,0.2) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", padding: "72px 24px", width: "100%" }}>
          <p style={{ margin: "0 0 12px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: 2.5, opacity: 0.75, textTransform: "uppercase" }}>
            40+ Cities Nationwide
          </p>
          <h1 style={{ margin: "0 0 16px", fontSize: "2.6rem", lineHeight: 1.2, fontWeight: 800, maxWidth: 560 }}>
            Find Urgent Care<br />Open Near You
          </h1>
          <p style={{ margin: "0 0 36px", fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.9, maxWidth: 500 }}>
            Real hours, real clinics — no appointment needed. Find a location that&apos;s open now in your city.
          </p>
          <a
            href="#cities"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#0057c2",
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Find Care Near You →
          </a>
        </div>
      </div>

      {/* Feature strip */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "28px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
          {features.map(({ src, label }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: "8px 48px",
                borderRight: i < features.length - 1 ? "1px solid #e8e8e8" : "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={label} style={{ width: 72, height: 72, objectFit: "contain" }} />
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a1a1a" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>

        {/* City Grid */}
        <section id="cities">
          <h2 style={{ margin: "0 0 20px" }}>Browse Urgent Care by City</h2>
          <CitySearch cities={cities} />
        </section>

        {/* Urgent Care vs ER */}
        <section style={{ marginTop: 72 }}>
          <h2 style={{ margin: "0 0 12px" }}>Urgent Care vs. Emergency Room</h2>
          <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 20 }}>
            Knowing where to go when you are sick or injured can save you time, money, and stress.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ background: "#f0f9ff", border: "1px solid #bae0fd", borderRadius: 10, padding: "20px 24px" }}>
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
            <div style={{ background: "#fff5f5", border: "1px solid #fcc", borderRadius: 10, padding: "20px 24px" }}>
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
          <p style={{ color: "#777", fontSize: "0.875rem", marginTop: 12 }}>
            If you are unsure, call 911 or go to your nearest ER. When in doubt, err on the side of caution.
          </p>
        </section>

        {/* What to Expect */}
        <section style={{ marginTop: 72 }}>
          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "0 1 360px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ContentImage_2.png"
                alt="Family checking in at urgent care"
                style={{ width: "100%", borderRadius: 12, boxShadow: "0 6px 24px rgba(0,0,0,0.1)", display: "block" }}
              />
            </div>
            <div style={{ flex: "1 1 280px" }}>
              <h2 style={{ margin: "0 0 12px" }}>What to Expect at an Urgent Care Visit</h2>
              <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
                Urgent care centers are designed to get you in and out quickly. Most visits follow this process:
              </p>
              <ol style={{ color: "#444", lineHeight: 2.1, paddingLeft: 20, margin: 0 }}>
                <li><strong>Check in</strong> — Walk in or check in online. Bring your insurance card and a photo ID.</li>
                <li><strong>Triage</strong> — A nurse will take your vitals and note your symptoms.</li>
                <li><strong>See a provider</strong> — A physician or NP will examine you. Typical wait: 15–45 min.</li>
                <li><strong>Treatment</strong> — Receive on-site care, a prescription, lab work, or a referral.</li>
                <li><strong>Discharge</strong> — Leave with instructions and follow up with your doctor if needed.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginTop: 72 }}>
          <h2 style={{ margin: "0 0 20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10, padding: "18px 20px" }}>
                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#1a1a1a" }}>{item.q}</p>
                <p style={{ margin: 0, color: "#555", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <BackToTop />
    </>
  );
}
