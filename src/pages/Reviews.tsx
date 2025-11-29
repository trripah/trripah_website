import { useState } from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Progress } from "../components/ui/progress";
import { Star } from "lucide-react";

interface ReviewsProps {
  onNavigate: (page: string) => void;
}

export function Reviews({ onNavigate }: ReviewsProps) {
  const [filterRating, setFilterRating] = useState("all");
  const [filterDestination, setFilterDestination] = useState("all");

  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment: "trripah made our honeymoon in Maldives absolutely magical! Every detail was perfect, from the overwater villa to the romantic dinners. The team was responsive and helpful throughout our trip. Highly recommended!",
      tripDestination: "Maldives",
      image: "https://images.unsplash.com/photo-1617153374846-6ebdc6369941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGNvdXBsZXxlbnwxfHx8fDE3NjE4MTMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Amit Kumar",
      location: "Delhi, India",
      rating: 5,
      comment: "Best Thailand trip ever! The itinerary was well-planned with a perfect mix of adventure and relaxation. Our guide was knowledgeable and the accommodations exceeded expectations. Worth every penny!",
      tripDestination: "Thailand",
      image: "https://images.unsplash.com/photo-1709572366321-524da39b27e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBoYXBweSUyMHRvdXJpc3RzfGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Sneha Patel",
      location: "Bangalore, India",
      rating: 5,
      comment: "Dubai was a dream come true! Everything from flights to hotels was seamless. The desert safari and Burj Khalifa visit were highlights. trripah's customer service is top-notch!",
      tripDestination: "Dubai",
      image: "https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2MTc0MzI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Vikram & Family",
      location: "Pune, India",
      rating: 5,
      comment: "Amazing family vacation to Bali! The kids loved the water parks and we enjoyed the cultural tours. trripah accommodated all our special requests. Excellent service!",
      tripDestination: "Bali",
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTc2OTMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Neha Reddy",
      location: "Hyderabad, India",
      rating: 4,
      comment: "Wonderful Vietnam tour! Ha Long Bay cruise was breathtaking and Hanoi streets were vibrant. Only minor hiccup was a delayed transfer, but support team handled it quickly.",
      tripDestination: "Vietnam",
      image: "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGFsb25nJTIwYmF5fGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Karan & Divya",
      location: "Ahmedabad, India",
      rating: 5,
      comment: "Perfect anniversary trip to Maldives! The resort was stunning and activities were well-organized. trripah surprised us with complimentary spa treatment. Unforgettable experience!",
      tripDestination: "Maldives",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rajesh Gupta",
      location: "Kolkata, India",
      rating: 5,
      comment: "Solo trip to Thailand was amazing! trripah arranged everything perfectly. Met other travelers, explored islands, and made great memories. Felt safe throughout the journey.",
      tripDestination: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Ananya Singh",
      location: "Chennai, India",
      rating: 5,
      comment: "Luxury Dubai package exceeded all expectations! From the 5-star hotel to private tours, everything was world-class. trripah's attention to detail is remarkable.",
      tripDestination: "Dubai",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjE4MDUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Aditya Malhotra",
      location: "Jaipur, India",
      rating: 4,
      comment: "Great Bali experience! Beautiful beaches, temples, and rice terraces. Food was delicious. Would have loved one more day in Ubud but overall fantastic trip!",
      tripDestination: "Bali",
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTc2OTMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 142, percentage: 91 },
    { stars: 4, count: 12, percentage: 8 },
    { stars: 3, count: 2, percentage: 1 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const totalReviews = 156;
  const averageRating = 4.9;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#004C91] to-[#003366] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Customer Reviews</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Real stories from real travelers. See what our customers have to say about their trripah experiences
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Overall Score */}
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-[#004C91]" style={{ fontSize: '4rem', fontWeight: 700 }}>
                      {averageRating}
                    </span>
                    <span className="text-gray-400" style={{ fontSize: '2rem' }}>/5</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-6 h-6 ${
                          index < Math.floor(averageRating)
                            ? "fill-[#FF7B00] text-[#FF7B00]"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Based on <span style={{ fontWeight: 600 }}>{totalReviews}</span> reviews
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-3">
                  {ratingBreakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm">{item.stars}</span>
                        <Star className="w-4 h-4 fill-[#FF7B00] text-[#FF7B00]" />
                      </div>
                      <Progress value={item.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-gray-600 w-12">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <h2>All Reviews</h2>
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterDestination} onValueChange={setFilterDestination}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by Destination" />
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
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#FFF3E0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Travelers Trust trripah</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-[#004C91] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    10,000+
                  </div>
                  <p>Happy Travelers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-[#004C91] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    98%
                  </div>
                  <p>Satisfaction Rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-[#004C91] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    24/7
                  </div>
                  <p>Customer Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
