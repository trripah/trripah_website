import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  packageCount: number;
  startingPrice: string;
  type: string;
  onClick: () => void;
}

export function DestinationCard({
  name,
  image,
  description,
  packageCount,
  startingPrice,
  type,
  onClick,
}: DestinationCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-[#1DB4D2] to-[#5B4FE6] text-white hover:opacity-90">
            {type}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>{name}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{packageCount} packages available</p>
            <p className="text-[#5B4FE6]" style={{ fontWeight: 600 }}>
              Starting from ₹{startingPrice}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}