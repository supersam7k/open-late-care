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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0057c2 0%, #0070f3 100%)", color: "#fff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h1 style={{ margin: "0 0 16px", fontSize: "2rem", lineHeight: 1.3 }}>
              Find Urgent Care Open Now Near You
            </h1>
            <p style={{ margin: "0 0 24px", fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.9 }}>
              Browse urgent care centers in 40 major US cities with real hours and clinic details — no appointment needed.
            </p>
            <a
              href="#cities"
              style={{ display: "inline-block", background: "#fff", color: "#0057c2", fontWeight: 700, padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontSize: "0.95rem" }}
            >
              Find Care Near You →
            </a>
          </div>
          <div style={{ flex: "0 1 340px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HeroBanner_2.png"
              alt="Urgent care center open late at night"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.35)", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div style={{ background: "#f0f9ff", borderBottom: "1px solid #bae0fd", padding: "20px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          {[
            { src: "/images/Icon_1.png", label: "Open Now" },
            { src: "/images/Icon_2.png", label: "Walk-Ins Welcome" },
            { src: "/images/Icon_4.png", label: "Compassionate Care" },
            { src: "/images/TrustBadge_1.png", label: "Verified Clinics" },
          ].map(({ src, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 90 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={label} style={{ width: 56, height: 56, objectFit: "contain" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0057c2", textAlign: "center", letterSpacing: 0.2 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>

        {/* City Grid */}
        <section id="cities">
          <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 20, lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/PageBanner_1.png"
              alt="Urgent care locations across major US cities"
              style={{ width: "100%", height: 160, objectFit: "cover", objectPosition: "center 40%", display: "block" }}
            />
          </div>
          <h2 style={{ margin: "0 0 20px" }}>Browse Urgent Care by City</h2>
          <CitySearch cities={cities} />
        </section>

        {/* 24/7 availability callout */}
        <section style={{ marginTop: 64, display: "flex", gap: 32, alignItems: "center", background: "#f0f9ff", border: "1px solid #bae0fd", borderRadius: 12, padding: "32px", flexWrap: "wrap" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ContentImage_1.png"
            alt="24/7 urgent care availability"
            style={{ width: 200, flexShrink: 0, borderRadius: 10, display: "block" }}
          />
          <div style={{ flex: "1 1 260px" }}>
            <h2 style={{ margin: "0 0 12px", color: "#0057c2" }}>Open Late. Available 24/7.</h2>
            <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 12px" }}>
              Whether it&apos;s 2am or a Sunday afternoon, urgent care centers are there when your primary care doctor isn&apos;t available. Many locations stay open until 10pm or later, and some operate around the clock.
            </p>
            <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
              Use our city listings to check real hours for clinics near you before you go — so you never show up to a closed door.
            </p>
          </div>
        </section>

        {/* Urgent Care vs ER */}
        <section style={{ marginTop: 64 }}>
          <h2 style={{ margin: "0 0 12px" }}>Urgent Care vs. Emergency Room</h2>
          <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 20 }}>
            Knowing where to go when you are sick or injured can save you time, money, and stress.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ background: "#f0f9ff", border: "1px solid #bae0fd", borderRadius: 8, padding: "20px 24px" }}>
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
            <div style={{ background: "#fff5f5", border: "1px solid #fcc", borderRadius: 8, padding: "20px 24px" }}>
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
        <section style={{ marginTop: 64 }}>
          <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 280px" }}>
              <h2 style={{ margin: "0 0 12px" }}>What to Expect at an Urgent Care Visit</h2>
              <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
                Urgent care centers are designed to get you in and out quickly. Most visits follow this process:
              </p>
              <ol style={{ color: "#444", lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li><strong>Check in</strong> — Walk in or check in online at some locations. Bring your insurance card and a photo ID.</li>
                <li><strong>Triage</strong> — A nurse or medical assistant will take your vitals and note your symptoms.</li>
                <li><strong>See a provider</strong> — A physician, nurse practitioner, or physician assistant will examine you. Average wait time is 15–45 minutes.</li>
                <li><strong>Treatment</strong> — You may receive treatment on-site, a prescription, lab work, or a referral depending on your condition.</li>
                <li><strong>Discharge</strong> — You will receive discharge instructions and can follow up with your primary care doctor if needed.</li>
              </ol>
            </div>
            <div style={{ flex: "0 1 300px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ContentImage_2.png"
                alt="Family checking in at urgent care reception"
                style={{ width: "100%", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginTop: 64 }}>
          <h2 style={{ margin: "0 0 20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 8, padding: "16px 20px" }}>
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
