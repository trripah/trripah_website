import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DestinationCard } from "../components/DestinationCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button";
import HomeImage from '../assets/bg.png';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Destinations() {
  const navigate = useNavigate();
  const destinationStyles = `
    @media (min-width: 768px) {
      .destinations-filters {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .destinations-grid {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .destinations-cta {
        padding-left: 4rem;
        padding-right: 4rem;
      }
    }
  `;
  const [filterType, setFilterType] = useState("all");
  const [filterBudget, setFilterBudget] = useState("all");

  const destinations = [
    {
      id: "thailand",
      name: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Tropical paradise with stunning beaches and vibrant culture",
      packageCount: 12,
      startingPrice: "18,999",
      type: "Beach & Culture",
    },
    {
      id: "maldives",
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Luxury island getaway with crystal-clear waters",
      packageCount: 8,
      startingPrice: "35,999",
      type: "Luxury Beach",
    },
    {
      id: "dubai",
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjE4MDUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Modern marvels and desert adventures",
      packageCount: 10,
      startingPrice: "24,999",
      type: "Urban Adventure",
    },
    {
      id: "bali",
      name: "Bali",
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTc2OTMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Spiritual retreats and lush landscapes",
      packageCount: 9,
      startingPrice: "22,999",
      type: "Culture & Nature",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      image: "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGFsb25nJTIwYmF5fGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Rich history and breathtaking natural wonders",
      packageCount: 7,
      startingPrice: "19,999",
      type: "Adventure",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{destinationStyles}</style>
      {/* Hero Section */}
      <section className="relative h-auto md:h-[400px] flex items-center justify-center overflow-hidden" style={{ marginTop: '-5rem', paddingTop: '3rem' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HomeImage}
            alt="Explore Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20 md:py-0">
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>Explore Our Destinations</h1>
          <p className="text-white/90 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
            Discover amazing places around the world. Each destination offers unique experiences tailored to your travel style.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6 destinations-filters">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterBudget} onValueChange={setFilterBudget}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Budgets</SelectItem>
                  <SelectItem value="budget">Under ₹20,000</SelectItem>
                  <SelectItem value="mid">₹20,000 - ₹40,000</SelectItem>
                  <SelectItem value="luxury">Above ₹40,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setFilterType("all");
                setFilterBudget("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 destinations-grid">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                onClick={() => navigate("/packages")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF3E0] destinations-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a custom trip tailored to your preferences with our trip builder
          </p>
          <Button
            onClick={() => navigate("/custom-trip")}
            className="hover:opacity-90 text-white"
            style={{background: 'linear-gradient(to right, #2B70E4, #094CBE)'}}
          >
            Build Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
}