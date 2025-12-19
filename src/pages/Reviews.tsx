import { useState } from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Progress } from "../components/ui/progress";
import { Star } from "lucide-react";
import DetailsData from '../DetailsData.json';

export function Reviews() {
  const [filterRating, setFilterRating] = useState("all");
  const [filterDestination, setFilterDestination] = useState("all");

  const reviewsStyles = `
    @media (min-width: 1024px) {
      .reviews-rating,
      .reviews-grid,
      .reviews-trust {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
  `;

  const testimonials = DetailsData.reviews;
  const ratingBreakdown = DetailsData.ratingBreakdown;
  const totalReviews = DetailsData.reviewStats.totalReviews;
  const averageRating = DetailsData.reviewStats.averageRating;

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{reviewsStyles}</style>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#004C91] to-[#003366] text-white py-20" style={{ marginTop: '-5rem', paddingTop: '6rem' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Customer Reviews</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Real stories from real travelers. See what our customers have to say about their trripah experiences
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 px-4 reviews-rating" >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reviews-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#FFF3E0] px-4 reviews-trust">
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
