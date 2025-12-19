import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import DetailsData from '../data/DetailsData.json';

export function Blog() {
  const navigate = useNavigate();
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogStyles = `
    @media (min-width: 1024px) {
      .blog-featured,
      .blog-grid,
      .blog-newsletter,
      .blog-cta {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
  `;

  const blogPosts = DetailsData.blogPosts;
  const categories = DetailsData.blogCategories;

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{blogStyles}</style>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#004C91] to-[#003366] text-white py-20" style={{ marginTop: '-5rem', paddingTop: '6rem',}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Travel Blog & Guides</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Inspiring stories, practical tips, and insider knowledge to help you plan your perfect journey
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b py-6 sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input-background"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase().replace(" ", "-")}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white px-4 blog-featured">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[300px] lg:h-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="bg-[#FF7B00] text-white w-fit mb-4">Featured</Badge>
                <h2 className="mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button className="bg-[#004C91] hover:bg-[#004C91]/90 text-white w-fit">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 blog-grid">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-2">Latest Articles</h2>
            <p className="text-gray-600">
              Stay updated with our latest travel tips, destination guides, and travel stories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge className="mb-3 bg-[#00BFA6] text-white">{post.category}</Badge>
                  <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pb-4 border-b">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-600">By {post.author}</span>
                    <Button variant="link" className="text-[#FF7B00] hover:text-[#FF7B00]/80 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#004C91] text-[#004C91] hover:bg-[#004C91] hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#FF7B00] to-[#FF9500] px-4 blog-newsletter">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest travel tips, destination guides, and exclusive deals delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-input-background"
                />
                <Button className="bg-[#004C91] hover:bg-[#004C91]/90 text-white">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join 10,000+ travelers getting weekly inspiration and tips
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 blog-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Turn Inspiration Into Reality?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our curated packages or create your own custom trip
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/packages")}
              className="bg-[#FF7B00] hover:bg-[#FF7B00]/90 text-white"
            >
              Browse Packages
            </Button>
            <Button
              onClick={() => navigate("/custom-trip")}
              variant="outline"
              className="border-[#004C91] text-[#004C91] hover:bg-[#004C91] hover:text-white"
            >
              Build Custom Trip
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
