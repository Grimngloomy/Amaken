
import { Building2, Bath, BedDouble, Square } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { title, price, location, beds, baths, sqft, image } = property;

  return (
    <Card className="overflow-hidden bg-[#111] border-white/10 hover:border-white/20 transition-colors">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-sm">{location}</p>
          <p className="text-xl font-semibold text-[#9b87f5]">${price}/mo</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
