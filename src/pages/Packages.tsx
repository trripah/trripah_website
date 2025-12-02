import { useState } from "react";
import { PackageCard } from "../components/PackageCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import HomeImage from '../assets/bg.png';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PackagesProps {
  onNavigate: (page: string, data?: any) => void;
}

export function Packages({ onNavigate }: PackagesProps) {
  const packageStyles = `
    @media (min-width: 768px) {
      .packages-filters {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .packages-grid {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .packages-promo {
        padding-left: 4rem;
        padding-right: 4rem;
      }
    }
  `;

  const [filterDestination, setFilterDestination] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDuration, setFilterDuration] = useState("all");

  const packages = [
    {
      id: "romantic-maldives",
      title: "Romantic Maldives Getaway",
      destination: "Maldives",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4N/5D",
      groupSize: "2 People",
      price: "35,999",
      highlights: [
        "Overwater villa stay",
        "Romantic candlelight dinner",
        "Snorkeling & water sports",
      ],
      category: "Honeymoon",
    },
    {
      id: "thailand-adventure",
      title: "Thailand Island Hopping",
      destination: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6N/7D",
      groupSize: "4-6 People",
      price: "18,999",
      highlights: [
        "Phi Phi Islands tour",
        "Bangkok city exploration",
        "Beach resort stay",
      ],
      category: "Adventure",
    },
    {
      id: "dubai-luxury",
      title: "Dubai Luxury Experience",
      destination: "Dubai",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjE4MDUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5N/6D",
      groupSize: "2-4 People",
      price: "24,999",
      highlights: [
        "Burj Khalifa visit",
        "Desert safari with BBQ",
        "Luxury hotel accommodation",
      ],
      category: "Luxury",
    },
    {
      id: "bali-spiritual",
      title: "Bali Spiritual Retreat",
      destination: "Bali",
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTc2OTMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7N/8D",
      groupSize: "2-4 People",
      price: "22,999",
      highlights: [
        "Ubud rice terraces",
        "Temple visits",
        "Yoga and meditation sessions",
      ],
      category: "Wellness",
    },
    {
      id: "vietnam-culture",
      title: "Vietnam Cultural Explorer",
      destination: "Vietnam",
      image: "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGFsb25nJTIwYmF5fGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5N/6D",
      groupSize: "2-6 People",
      price: "19,999",
      highlights: [
        "Halong Bay cruise",
        "Hanoi Old Quarter tour",
        "Vietnamese cooking class",
      ],
      category: "Culture",
    },
    {
      id: "thailand-family",
      title: "Thailand Family Fun Package",
      destination: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6N/7D",
      groupSize: "4-6 People",
      price: "21,999",
      highlights: [
        "Safari World Bangkok",
        "Elephant sanctuary visit",
        "Beach activities for kids",
      ],
      category: "Family",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{packageStyles}</style>
      {/* Hero */}
      <section  className="relative h-auto md:h-[400px] flex items-center justify-center overflow-hidden" style={{ marginTop: '-5rem', paddingTop: '5rem' }}>
        
        <ImageWithFallback
          src={HomeImage}
          alt="Travel Packages Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 text-center relative z-10"
        style={{paddingTop: '3rem',paddingBottom:'3rem'}}
        >
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>Our Travel Packages</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Handpicked experiences designed to create unforgettable memories. Browse our curated packages and find your perfect adventure.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6 shadow-sm packages-filters">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={filterDestination} onValueChange={setFilterDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                <SelectItem value="thailand">Thailand</SelectItem>
                <SelectItem value="maldives">Maldives</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="bali">Bali</SelectItem>
                <SelectItem value="vietnam">Vietnam</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="honeymoon">Honeymoon</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="culture">Culture</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterDuration} onValueChange={setFilterDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">3-5 Days</SelectItem>
                <SelectItem value="medium">6-8 Days</SelectItem>
                <SelectItem value="long">9+ Days</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setFilterDestination("all");
                setFilterCategory("all");
                setFilterDuration("all");
              }}
              className="w-full"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 packages-grid">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span style={{ fontWeight: 600 }}>{packages.length}</span> packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                {...pkg}
                onViewDetails={(id) => onNavigate("package-detail", { id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 packages-promo" style={{background: 'linear-gradient(to right, #2B70E4, #094CBE)'}}>
        <div className="container mx-auto px-4">
          <Card className="bg-white/95">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4">🎉 Limited Time Offer!</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Book any package before November 15th and get <span style={{ fontWeight: 700 }}>20% OFF</span> plus a complimentary airport transfer!
              </p>
              <Button
                onClick={() => onNavigate("custom-trip")}
                className="bg-white text-[#5B4FE6] hover:bg-gray-100"
              >
                Book Now & Save
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Don't See Your Dream Trip?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a personalized itinerary tailored to your interests, budget, and travel style
          </p>
          <Button
            onClick={() => onNavigate("custom-trip")}
            className="hover:opacity-90 text-white"
            style={{background: 'linear-gradient(to right, #2B70E4, #094CBE)'}}
          >
            Create Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
}