
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Bed, Bath, Phone, SquareFootIcon } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isNumberRevealed, setIsNumberRevealed] = useState(false);
  const maskedNumber = "+1 (XXX) XXX-5678";
  const realNumber = "+1 (555) 123-5678";

  return (
    <Card className="overflow-hidden border-white/10 bg-[#111] transition-colors hover:border-white/20">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">{property.title}</h3>
          <p className="text-2xl font-bold">${property.price}/mo</p>
          <p className="text-sm text-gray-400">{property.location}</p>
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <SquareFootIcon className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-white/10 p-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setIsNumberRevealed(true)}
        >
          <Phone className="mr-2 h-4 w-4" />
          {isNumberRevealed ? realNumber : maskedNumber}
        </Button>
      </CardFooter>
    </Card>
  );
}
