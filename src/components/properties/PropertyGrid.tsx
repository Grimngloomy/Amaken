import { PropertyCard } from "./PropertyCard";
import { Building2 } from "lucide-react";

const mockProperties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    price: 2500,
    location: "Downtown, City",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 2,
    title: "Luxury Penthouse with View",
    price: 4500,
    location: "Uptown, City",
    beds: 3,
    baths: 3,
    sqft: 2000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 3,
    title: "Cozy Studio Near Park",
    price: 1800,
    location: "Midtown, City",
    beds: 1,
    baths: 1,
    sqft: 600,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

export function PropertyGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockProperties.length === 0 ? (
        <div className="col-span-full flex items-center justify-center rounded-lg border border-white/10 bg-[#111] p-8 text-center">
          <div className="space-y-2">
            <Building2 className="mx-auto h-8 w-8 text-gray-400" />
            <h3 className="text-lg font-semibold">No properties found</h3>
            <p className="text-sm text-gray-400">Try adjusting your filters</p>
          </div>
        </div>
      ) : (
        mockProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
}
