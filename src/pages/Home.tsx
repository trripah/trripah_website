import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { PackageCard } from "../components/PackageCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Search, Shield, HeadphonesIcon, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import HomeImage from '../assets/bg.png';
import GoaImage from '../assets/goa.jpg';
import KeralaImage from '../assets/karela.jpg';
import TamilnaduImage from '../assets/tamilnadu.jpg';
import NorthEast from '../assets/northEast.jpg'
import Rajastan from '../assets/rajastan.jpg'
import India from '../assets/India Flag.svg'
import World from '../assets/world-map.svg'

export function Home() {
  const navigate = useNavigate();
  const [searchDestination, setSearchDestination] = useState("");
  const [searchBudget, setSearchBudget] = useState("");
  const [activeTab, setActiveTab] = useState("international");

  const internationalDestinations = [
    {
      id: "thailand",
      name: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?q=80&w=1080",
      description: "Tropical paradise",
      startingPrice: "15,000",
      discount: "18% OFF",
    },
    {
      id: "dubai",
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?q=80&w=1080",
      description: "Modern marvels",
      startingPrice: "24,999",
      discount: "22% OFF",
    },
    {
      id: "maldives",
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?q=80&w=1080",
      description: "Luxury island getaway",
      startingPrice: "35,999",
      discount: "30% OFF",
    },
    {
      id: "bali",
      name: "Bali",
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?q=80&w=1080",
      description: "Spiritual retreats",
      startingPrice: "22,999",
      discount: "16% OFF",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      image: "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?q=80&w=1080",
      description: "Rich history",
      startingPrice: "19,999",
      discount: "20% OFF",
    },
  ];

  const indiaDestinations = [
    {
      id: "tamilnadu",
      name: "Tamil Nadu",
      image: TamilnaduImage,
      description: "Temples & culture",
      startingPrice: "9,999",
      discount: "20% OFF",
    },
    {
      id: "goa",
      name: "Goa",
      image: GoaImage,
      description: "Beaches & culture",
      startingPrice: "8,999",
      discount: "15% OFF",
    },
    {
      id: "kerala",
      name: "Kerala",
      image: KeralaImage,
      description: "Backwaters paradise",
      startingPrice: "10,999",
      discount: "25% OFF",
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      image: Rajastan,
      description: "Palaces & deserts",
      startingPrice: "12,999",
      discount: "10% OFF",
    },
    {
      id: "north-east",
      name: "North-East India",
      image: NorthEast,
      description: "Mountains & culture",
      startingPrice: "14,999",
      discount: "12% OFF",
    },
  ];

  const destinations = activeTab === "international" ? internationalDestinations : indiaDestinations;

  const featuredPackages = [
    {
      id: "romantic-maldives",
      title: "Romantic Maldives Getaway",
      destination: "Maldives",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080  ",
      duration: "4N/5D",
      groupSize: "2 People",
      price: "35,999",
      highlights: [
        "Overwater villa stay",
        "Romantic candlelight dinner",
        "Snorkeling & water sports",
      ],
      category: "Honeymoon",
      discount: "28% OFF",
    },
    {
      id: "thailand-adventure",
      title: "Thailand Island Hopping",
      destination: "Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080  ",
      duration: "6N/7D",
      groupSize: "4-6 People",
      price: "18,999",
      highlights: [
        "Phi Phi Islands tour",
        "Bangkok city exploration",
        "Beach resort stay",
      ],
      category: "Adventure",
      discount: "25% OFF",
    },
    {
      id: "dubai-luxury",
      title: "Dubai Luxury Experience",
      destination: "Dubai",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjE4MDUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080  ",
      duration: "5N/6D",
      groupSize: "2-4 People",
      price: "24,999",
      highlights: [
        "Burj Khalifa visit",
        "Desert safari with BBQ",
        "Luxury hotel accommodation",
      ],
      category: "Luxury",
      discount: "24% OFF",
    },
    {
        id: "vietnam-explorer",
        title: "Vietnam Highlights",
        destination: "Vietnam",
        image: "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?q=80&w=1080",
        duration: "6N/7D",
        groupSize: "2-6 People",
        price: "19,999",
        highlights: ["Ha Long Bay", "Hanoi Street Food", "Hoi An Ancient Town"],
        category: "Culture",
        discount: "20% OFF"
    },
    {
        id: "bali-retreat",
        title: "Bali Spiritual Retreat",
        destination: "Bali",
        image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwc3BpcnR1YWwlMjByZXRyZWF0fGVufDF8fHx8fDE3NjE4MjA5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        duration: "5N/6D",
        groupSize: "2-4 People",
        price: "22,999",
        highlights: ["Yoga & meditation", "Temple visits", "Traditional spa"],
        category: "Wellness",
        discount: "18% OFF"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      location: "Mumbai, India",
      rating: 5,
      comment: "trripah made our honeymoon in Maldives absolutely magical! Every detail was perfect.",
      tripDestination: "Maldives",
      image: "https://images.unsplash.com/photo-1617153374846-6ebdc6369941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGNvdXBsZXxlbnwxfHx8fDE3NjE4MTMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080  ",
    },
    {
      name: "Amit Kumar",
      location: "Delhi, India",
      rating: 5,
      comment: "Best Thailand trip ever! The itinerary was well-planned and the support team was amazing.",
      tripDestination: "Thailand",
      image: "https://images.unsplash.com/photo-1709572366321-524da39b27e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBoYXBweSUyMHRvdXJpc3RzfGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080  ",
    },
    {
      name: "Sneha Patel",
      location: "Bangalore, India",
      rating: 5,
      comment: "Dubai was a dream come true! Everything from flights to hotels was seamless.",
      tripDestination: "Dubai",
      image: "https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2MTc0MzI5NXww&ixlib=rb-4.1.0&q=80&w=1080  ",
    },
  ];

  const whyTrippah = [
    {
      icon: Sparkles,
      title: "Curated Trips",
      description: "Handpicked destinations and experiences tailored to your preferences",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from our travel experts",
    },
    {
      icon: Shield,
      title: "Hassle-free Bookings",
      description: "Simple, secure, and transparent booking process",
    },
  ];

  const blogPosts = [
    {
      title: "10 Hidden Gems in Thailand",
      image: "https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYxNzg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080  ",
      excerpt: "Discover the lesser-known treasures of Thailand beyond the tourist hotspots.",
      date: "Oct 25, 2025",
    },
    {
      title: "Ultimate Maldives Travel Guide",
      image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080  ",
      excerpt: "Everything you need to know for your perfect Maldives vacation.",
      date: "Oct 20, 2025",
    },
    {
      title: "Dubai on a Budget",
      image: "https://images.unsplash.com/photo-1643904736472-8b77e93ca3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjE4MDUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080  ",
      excerpt: "Experience Dubai's luxury without breaking the bank. Here's how!",
      date: "Oct 15, 2025",
    },
  ];

  return (
    <div className="min-h-screen" style={{ overflow: 'visible' }}>
      {/* Hero Section */}
      <section className="relative h-auto md:h-[600px] md:px-20 flex items-center justify-center overflow-visible" style={{ marginTop: '-5rem', paddingTop: '3rem',}}>
          <div className="absolute inset-0">
              <ImageWithFallback
                  src={HomeImage}
                  alt="Travel Adventure"
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white py-20 md:py-0" data-hero-content>
              <div className="flex flex-col justify-start items-start text-start md:text-left w-full md:w-[60%] px-4 md:px-16">
                  <h1 className="text-white" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>
                      Discover Your Next
                  </h1>
                  <h1 className="text-white mb-6" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>
                      Adventure
                  </h1>
                  <p className="text-white/90 mb-1" style={{ fontSize: 'clamp(.75rem, 2vw, 1.15rem)' }}>
                      Curated travel experiences to Thailand, Maldives,
                  </p>
                  <p className="text-white/90 mb-8" style={{ fontSize: 'clamp(.75rem, 2vw, 1.15rem)' }}>
                      Vietnam, Bali & Dubai
                  </p>
              </div>
              <div className="w-full md:w-[40%] md:px-4 flex justify-center md:justify-end" style={{ width: '100%', maxWidth: '400px', }}> 
                  <Card className="w-full border-none bg-white rounded-sm" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}>
                      <CardContent className="px-4 py-2">
                          <div className="mb-6 space-y-2">
                              <h1 className=" text-gray-900" style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                                  Plan your trip with us
                              </h1>
                              <p className="text-[0.75rem] text-gray-500 leading-relaxed">
                                  At RealRoadies, we redefine corporate events by merging adventure, team
                              </p>
                          </div>
                          <div className="flex flex-col gap-4">
                              <Select value={searchDestination} onValueChange={setSearchDestination}>
                                  <SelectTrigger className="h-12 border-none bg-gray-100 text-gray-500 focus:ring-0 px-4">
                                      <SelectValue placeholder="Select destination" />
                                  </SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="thailand">Thailand</SelectItem>
                                      <SelectItem value="maldives">Maldives</SelectItem>
                                      <SelectItem value="dubai">Dubai</SelectItem>
                                  </SelectContent>
                              </Select>

                              <Select value={searchBudget} onValueChange={setSearchBudget}>
                                  <SelectTrigger className="h-12 border-none bg-gray-100 text-gray-500 focus:ring-0 px-4">
                                      <SelectValue placeholder="Budget Range" />
                                  </SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="budget">Under ₹20,000</SelectItem>
                                      <SelectItem value="mid">₹20,000 - ₹40,000</SelectItem>
                                      <SelectItem value="luxury">Above ₹40,000</SelectItem>
                                  </SelectContent>
                              </Select>

                              <div className="relative">
                                  <Input type="date" className="h-10 border-none bg-gray-100 text-gray-500 focus-visible:ring-0  px-4 w-full block" />
                              </div>

                              <Input type="text" placeholder="Do you need customization ?" className="h-10 border-none bg-gray-100 placeholder:text-gray-500 focus-visible:ring-0  px-4" />
                              <Button
                                  className="w-full h-12 mt-2 text-white font-semibold text-base "
                                  onClick={() => navigate("/packages")}
                                  style={{ backgroundColor: '#2b70e4', cursor: 'pointer' }}
                              >
                                  Get in touch
                              </Button>
                          </div>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>

      {/* Top Destinations Section */}
      <section style={styles.sectionContainer}>
        <div className="container mx-auto">
          <div style={styles.headerContainer}>
            <h2 style={styles.sectionTitle} data-section-title>Top Destinations</h2>
            <p style={styles.sectionSubtitle} data-section-subtitle data-subtitle>
              Explore our handpicked destinations, each offering unique experiences and
              unforgettable memories
            </p>
            <div style={styles.tabContainer} data-tab-container>
              <button 
                onClick={() => setActiveTab("international")}
                style={{
                  ...(activeTab === "international" ? styles.activeTab : styles.inactiveTab),
                  borderRadius: '4px 0px 0px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <img src={World} alt="World" style={{ height: '20px', width: '20px' }} />
                International
              </button>
              <button 
                onClick={() => setActiveTab("india")}
                style={{
                  ...(activeTab === "india" ? styles.activeTab : styles.inactiveTab),
                  borderRadius: '0px 4px 4px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <img src={India} alt="India" style={{ height: '20px', width: '20px' }} />
                Incredible India
              </button>
            </div>
          </div>

          <div style={styles.destinationCarouselContainer} data-destination-carousel>
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                style={{
                  ...styles.destinationCardContainer,
                  animation: 'flipCard 0.6s ease-in-out forwards',
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => navigate("/destinations")}
                className="group"
              >
                <div style={styles.cardImageWrapper}>
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    style={styles.cardImage}
                    className="transition-transform group-hover:scale-110 duration-300"
                  />
                  {/* {destination.discount && (
                    <div style={styles.discountBadge}>
                      {destination.discount}
                    </div>
                  )} */}
                  <div style={styles.cardOverlay}>
                    <h3 style={styles.cardTitle}>{destination.name}</h3>
                    <p style={styles.cardPrice}>Starts at {destination.startingPrice} <span style={{fontSize: '0.8rem', fontWeight: 400}}>per person</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div style={styles.statItem} data-stat-item-hide>
                <span style={styles.statNumber} data-stat-number>100+</span>
                <span style={styles.statText} data-stat-text>At RealRoadies, we<br/>corporate events by</span>
            </div>
            <div style={styles.statItem} data-stat-item-hide>
                <span style={styles.statNumber} data-stat-number>100+</span>
                <span style={styles.statText} data-stat-text>At RealRoadies, we<br/>corporate events by</span>
            </div>
            <div style={styles.statItem}>
                <span style={styles.statNumber} data-stat-number>100+</span>
                <span style={styles.statText} data-stat-text>At RealRoadies, we<br/>corporate events by</span>
            </div>
        </div>
      </section>

      {/* UPDATED: Exclusive Packages Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-3 px-4">
            <h2 className="mb-4" style={{fontSize: '1.875rem', fontWeight: '700'}} data-section-title>Exclusive Deals & Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-exclusive-subtitle data-subtitle>
              Limited-time offers on our most popular travel packages
            </p>
          </div>
          
          {/* Horizontal Scroll Carousel (Reusing styles from Top Destinations) */}
          <div style={styles.destinationCarouselContainer} data-destination-carousel>
            {featuredPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                style={styles.destinationCardContainer}
                onClick={() => navigate(`/package/${pkg.id}`)}
                className="group"
              >
                <div style={styles.cardImageWrapper}>
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    style={styles.cardImage}
                    className="transition-transform group-hover:scale-110 duration-300"
                  />
                  {pkg.discount && (
                    <div style={styles.discountBadge1}>
                      {pkg.discount}
                    </div>
                  )}
                  <div style={styles.cardOverlay}>
                    {/* Using Destination Name to match the visual style of the screenshot "Thailand" */}
                    <h3 style={styles.cardTitle1}>{pkg.destination}</h3>
                    <p style={styles.cardPrice1}>Starts at {pkg.price} <span style={{fontSize: '0.8rem', fontWeight: 400}}>per person</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why trripah */}
      <section style={styles.whyTrippahSection} data-why-trippah-section>
        <div style={styles.whyTrippahContainer} data-why-trippah-container>
          <div style={styles.whyTrippahHeader} data-why-trippah-header>
            <h2 style={styles.whyTrippahTitle}data-section-title>Why Choose trripah?</h2>
            <p style={styles.whyTrippahSubtitle} data-subtitle>
              We're committed to making your travel dreams a reality
            </p>
          </div>
          <div style={styles.whyTrippahGrid} data-why-trippah-grid>
            {whyTrippah.map((item, index) => (
              <Card key={index} style={styles.whyTrippahCard}>
                <CardContent style={styles.whyTrippahCardContent}>
                  <div style={styles.whyTrippahIconWrapper}>
                    <item.icon style={styles.whyTrippahIcon} />
                  </div>
                  <h3 style={styles.whyTrippahCardTitle}>{item.title}</h3>
                  <p style={styles.whyTrippahCardDescription}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialsSection} data-testimonials-section>
        <div style={styles.testimonialsContainer} data-testimonials-container>
          <div style={styles.testimonialsHeader} data-testimonials-header>
            <h2 style={styles.testimonialsTitle} data-section-title>What Our Travelers Say</h2>
            <p style={styles.testimonialsSubtitle} data-subtitle>
              Real stories from real travelers who experienced the trripah difference
            </p>
          </div>
          <div style={styles.testimonialsGrid} data-testimonials-grid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div style={styles.testimonialsButtonContainer}>
            <Button
              variant="outline"
              onClick={() => navigate("/reviews")}
              className="border-[#5B4FE6] text-[#5B4FE6] hover:bg-[#5B4FE6] hover:text-white"
              style={{ cursor: 'pointer' }}
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section style={styles.blogSection} data-blog-section>
        <div style={styles.blogContainer} data-blog-container>
          <div style={styles.blogHeader} data-blog-header>
            <h2 style={styles.blogTitle} data-section-title>Travel Stories & Guides</h2>
            <p style={styles.blogSubtitle} data-subtitle>
              Get inspired with our latest travel tips and destination guides
            </p>
          </div>
          <div style={styles.blogGrid} data-blog-grid>
            {blogPosts.map((post, index) => (
              <Card key={index} style={styles.blogCard}>
                <div style={styles.blogImageWrapper}>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <CardContent style={styles.blogCardContent}>
                  <p style={styles.blogDate}>{post.date}</p>
                  <h3 style={styles.blogCardTitle}>{post.title}</h3>
                  <p style={styles.blogExcerpt}>{post.excerpt}</p>
                  <Button
                    variant="link"
                    className="text-[#5B4FE6] hover:text-[#5B4FE6]/80 p-0"
                    onClick={() => navigate("/blog")}
                    style={{ cursor: 'pointer' }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={styles.blogButtonContainer}>
            <Button
              onClick={() => navigate("/blog")}
              variant="outline"
              className="border-[#5B4FE6] text-[#5B4FE6] hover:bg-[#5B4FE6] hover:text-white"
              style={{ cursor: 'pointer' }}
            >
              Visit Our Blog
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p style={styles.ctaSubtitle}>
            Let our travel experts create a personalized itinerary just for you
          </p>
          <Button
            onClick={() => navigate("/custom-trip")}
            size="lg"
            style={styles.ctaButton}
          >
            Plan My Trip Now
          </Button>
        </div>
      </section> */}
      
      {/* Hide scrollbar CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes flipCard {
          0% {
            transform: rotateY(0deg) scale(1);
            opacity: 0;
          }
          50% {
            transform: rotateY(90deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotateY(180deg) scale(1);
            opacity: 1;
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1024px) {
          [data-hero-content] {
            padding-inline: 10rem;
          }
        }
        @media (max-width: 768px) {
          [data-section-title] {
            font-size: clamp(1.5rem, 5vw, 3rem) !important;
          }
          [data-section-subtitle] {
            font-size: 0.75rem !important;
          }
          [data-subtitle] {
            font-size: 0.75rem !important;
          }
          [data-tab-container] button {
            font-size: 0.875rem !important;
            padding: 10px 20px !important;
            min-width: 130px !important;
          }
          [data-stat-number] {
            font-size: 1.875rem !important;
          }
          [data-stat-text] {
            font-size: 0.75rem !important;
          }
          [data-stat-item-hide] {
            display: none !important;
          }
          [data-exclusive-title] {
            font-size: 1.5rem !important;
          }
          [data-exclusive-subtitle] {
            font-size: 0.75rem !important;
          }
          [data-destination-carousel] {
            display: flex !important;
            gap: 16px !important;
            overflow-x: auto !important;
            padding: 20px 5vw !important;
            grid-template-columns: none !important;
          }
          [data-destination-carousel] > div {
            min-width: 280px !important;
            flex-shrink: 0 !important;
          }
          [data-why-trippah-section] {
            padding-inline: 1rem !important;
          }
          [data-why-trippah-container] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          [data-why-trippah-header] {
            margin-bottom: 2rem !important;
          }
          [data-why-trippah-grid] {
            gap: 1rem !important;
          }
          [data-testimonials-section] {
            padding-inline: 1rem !important;
          }
          [data-testimonials-container] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          [data-testimonials-header] {
            margin-bottom: 2rem !important;
          }
          [data-testimonials-grid] {
            gap: 16px !important;
          }
          [data-blog-section] {
            padding-inline: 1rem !important;
          }
          [data-blog-container] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          [data-blog-header] {
            margin-bottom: 1.5rem !important;
          }
          [data-blog-grid] {
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

// SHARED STYLES
const styles = {
  sectionContainer: {
    paddingTop: '4rem',
    backgroundColor: '#fff',
  },
  headerContainer: {
    textAlign: 'center' as 'center',
    marginBottom: '2rem',
    padding: '0 1rem',
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0',
    marginBottom: '2rem',
  },
  activeTab: {
    background: 'linear-gradient(to right, #2B70E4, #094CBE)',
    color: '#fff',
    padding: '10px 40px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    minWidth: '160px',
  },
  inactiveTab: {
    backgroundColor: '#f3f4f6',
    color: '#333',
    padding: '10px 40px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    minWidth: '160px',
  },
  carouselContainer: {
    display: 'flex',
    overflowX: 'auto' as 'auto',
    gap: '24px',
    padding: '20px 5vw',
    scrollBehavior: 'smooth' as 'smooth',
    WebkitOverflowScrolling: 'touch',
  } as React.CSSProperties,
  cardContainer: {
    minWidth: '280px',
    maxWidth: '280px',
    height: '420px',
    flexShrink: 0,
    cursor: 'pointer',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative' as 'relative',
    transition: 'transform 0.3s ease',
  },
  destinationCarouselContainer: {
    display: 'grid' as 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '16px',
    padding: '20px 5vw',
    animation: 'fadeIn 0.5s ease-in-out',
    perspective: '1000px',
  } as React.CSSProperties,
  destinationCardContainer: {
    width: '100%',
    height: '350px',
    cursor: 'pointer',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative' as 'relative',
    transition: 'transform 0.3s ease',
    transformStyle: 'preserve-3d',
  } as React.CSSProperties,
  cardImageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative' as 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  },
  cardOverlay: {
    position: 'absolute' as 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'flex-end',
    height: '50%',
  },
  cardTitle: {
    color: 'white',
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '4px',
    transform: 'scaleX(-1)',
  },
  cardTitle1: {
    color: 'white',
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '4px',
  },
  cardPrice: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1rem',
    fontWeight: '500',
    transform: 'scaleX(-1)',
  },
  cardPrice1: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1rem',
    fontWeight: '500',
  },
  discountBadge: {
    position: 'absolute' as 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: '600',
    zIndex: 10,
    transform: 'scaleX(-1)',
  },
  discountBadge1: {
    position: 'absolute' as 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: '600',
    zIndex: 10,
  },
  statsSection: {
    backgroundColor: '#eaf4ff',
    padding: '3rem 0',
    marginTop: '3rem',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  statNumber: {
    color: '#1E64EC',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  statText: {
    textAlign: 'left' as 'left',
    fontSize: '0.875rem',
    color: '#4b5563',
    lineHeight: '1.4',
  },
  whyTrippahSection: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    paddingInline: '4rem',
    backgroundColor: '#E6F0FF',
    color: '#000',
  },
  whyTrippahContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  whyTrippahHeader: {
    textAlign: 'center' as 'center',
    marginBottom: '3rem',
  },
  whyTrippahTitle: {
    color: '#000',
    marginBottom: '1rem',
    fontSize: '1.875rem',
    fontWeight: '700',
  },
  whyTrippahSubtitle: {
    color: 'rgba(0, 0, 0, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1rem',
  },
  whyTrippahGrid: {
    display: 'grid' as 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  whyTrippahCard: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // borderColor: 'rgba(0, 0, 0, 0.2)',
    color: '#000',
  },
  whyTrippahCardContent: {
    padding: '2rem',
    textAlign: 'center' as 'center',
  },
  whyTrippahIconWrapper: {
    width: '64px',
    height: '64px',
    backgroundColor: '#E6F0FF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto',
  },
  whyTrippahIcon: {
    width: '32px',
    height: '32px',
    color: '#2B70E4',
  },
  whyTrippahCardTitle: {
    color: '#000',
    marginBottom: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: '600',
  },
  whyTrippahCardDescription: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  testimonialsSection: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    paddingInline: '4rem',
    backgroundColor: '#fff',
  },
  testimonialsContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  testimonialsHeader: {
    textAlign: 'center' as 'center',
    marginBottom: '3rem',
  },
  testimonialsTitle: {
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  testimonialsSubtitle: {
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
  testimonialsGrid: {
    display: 'grid' as 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '2rem',
  },
  testimonialsButtonContainer: {
    textAlign: 'center' as 'center',
  },
  blogSection: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    paddingInline: '4rem',
    backgroundColor: '#f9fafb',
  },
  blogContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  blogHeader: {
    textAlign: 'center' as 'center',
    marginBottom: '2rem',
  },
  blogTitle: {
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  blogSubtitle: {
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
  blogGrid: {
    display: 'grid' as 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '2rem',
  },
  blogCard: {
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease',
  },
  blogImageWrapper: {
    height: '192px',
    overflow: 'hidden',
  },
  blogCardContent: {
    padding: '20px',
  },
  blogDate: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    marginBottom: '8px',
  },
  blogCardTitle: {
    marginBottom: '12px',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  blogExcerpt: {
    color: '#666',
    marginBottom: '16px',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  blogButtonContainer: {
    textAlign: 'center' as 'center',
  },
  ctaSection: {
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    background: 'linear-gradient(to right, #1DB4D2, #5B4FE6)',
    color: '#fff',
    marginBottom: '3rem',
  },
  ctaContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textAlign: 'center' as 'center',
  },
  ctaTitle: {
    color: '#fff',
    marginBottom: '1rem',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  ctaSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    fontSize: '1.125rem',
  },
  ctaButton: {
    backgroundColor: '#fff',
    color: '#5B4FE6',
    cursor: 'pointer',
  }
};