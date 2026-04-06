import ListingCard from "@/components/ListingCard";
import { getLosAngelesUrgentCareListings } from "@/lib/listings";

export default function Page() {
  const listings = getLosAngelesUrgentCareListings();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Urgent Care Open Now in Riverside
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Find urgent care clinics that are open late, open now, or available
            after normal business hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-4 text-sm text-slate-500">
          Hours may vary. Call to confirm.
        </div>

        <div className="grid gap-4">
          {listings.map((listing) => (
            <ListingCard key={listing.name} listing={listing} />
          ))}
        </div>
      </section>
    </main>
  );
}
