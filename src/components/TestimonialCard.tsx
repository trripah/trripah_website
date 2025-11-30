import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  tripDestination: string;
  image: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  comment,
  tripDestination,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 style={{ fontWeight: 600 }}>{name}</h4>
            <p className="text-sm text-gray-600">{location}</p>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating
                      ? "fill-[#5B4FE6] text-[#5B4FE6]"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-3 italic">"{comment}"</p>
        <p className="text-sm text-[#5B4FE6]">
          Trip to: <span style={{ fontWeight: 600 }}>{tripDestination}</span>
        </p>
      </CardContent>
    </Card>
  );
}