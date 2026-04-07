import { notFound } from "next/navigation";

type Props = {
  params: {
    city: string;
  };
};

function formatCity(city: string) {
  return city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props) {
  const cityName = formatCity(params.city);

  return {
    title: `Urgent Care Open Now in ${cityName} (24 Hour & Late Night Clinics)`,
    description: `Find urgent care centers open now in ${cityName}. Browse locations, hours, and contact info for late-night and 24-hour urgent care clinics.`,
  };
}

export default function Page({ params }: Props) {
  const cityName = formatCity(params.city);

  return (
    <main style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h1>Urgent Care Open Now in {cityName}</h1>

      <p>
        Find urgent care centers open now in {cityName}. Browse locations,
        hours, and contact information.
      </p>

      <p>Listings coming soon.</p>
    </main>
  );
}