import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  highlights: string[];
  category: string;
  onViewDetails: (id: string) => void;
}

export function PackageCard({
  id,
  title,
  destination,
  image,
  duration,
  groupSize,
  price,
  highlights,
  category,
  onViewDetails,
}: PackageCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow" style={{borderRadius:'5px'}}>
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#1DB4D2] text-white hover:bg-[#1DB4D2]/90">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{destination}</span>
        </div>
        <h3 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>{title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Highlights:</p>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-[#5B4FE6] mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-[#5B4FE6]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              ₹{price}
            </p>
          </div>
          <Button
            onClick={() => onViewDetails(id)}
            className="bg-gradient-to-r from-[#1DB4D2] to-[#5B4FE6] hover:opacity-90 text-white"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}