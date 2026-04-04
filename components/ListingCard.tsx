import type { Listing } from "@/lib/types";

export default function ListingCard({ listing }: { listing: Listing }) {
  const isOpenNow = listing.status.toLowerCase() === "open now";

  return (
    <article className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold">{listing.name}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isOpenNow
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {listing.status}
            </span>
          </div>

          <div className="mt-2 text-sm font-medium text-slate-700">
            {listing.hours}
          </div>
          <div className="mt-2 text-sm text-slate-600">{listing.address}</div>
          <div className="mt-1 text-sm text-slate-600">{listing.phone}</div>

          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            {listing.note}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {listing.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 lg:w-44">
          <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:opacity-95">
            Call clinic
          </button>
          <button className="rounded-2xl border px-4 py-3 text-sm font-medium hover:bg-slate-50">
            Get directions
          </button>
          <button className="rounded-2xl border px-4 py-3 text-sm font-medium hover:bg-slate-50">
            View details
          </button>
        </div>
      </div>
    </article>
  );
}