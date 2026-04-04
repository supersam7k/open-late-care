import listings from "@/data/listings/los-angeles-urgent-care-open-now.json";
import type { Listing } from "./types";

export function getLosAngelesUrgentCareListings(): Listing[] {
  return listings as Listing[];
}