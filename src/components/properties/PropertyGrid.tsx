
import { PropertyCard } from "./PropertyCard";

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
      {mockProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
