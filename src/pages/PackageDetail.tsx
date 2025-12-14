import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Clock, Users, MapPin, Check, X, Calendar, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock package data
  const packageData = {
    id: "romantic-maldives",
    title: "Romantic Maldives Getaway",
    destination: "Maldives",
    category: "Honeymoon",
    duration: "4N/5D",
    groupSize: "2 People",
    price: "35,999",
    originalPrice: "44,999",
    rating: 4.8,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2MTc5MzMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2MTc0MzI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1617153374846-6ebdc6369941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGNvdXBsZXxlbnwxfHx8fDE3NjE4MTMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    overview: "Experience paradise with your loved one in this all-inclusive Maldives package. Enjoy pristine beaches, luxury overwater villas, and world-class service. This romantic getaway includes everything you need for an unforgettable honeymoon or anniversary celebration.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive at Male International Airport. Speedboat transfer to resort. Check-in to overwater villa. Welcome cocktails and resort orientation. Evening at leisure.",
      },
      {
        day: 2,
        title: "Island Adventures",
        description: "Breakfast at villa. Morning snorkeling session. Lunch at beach restaurant. Afternoon water sports (jet ski, kayaking). Sunset cruise. Romantic beach dinner.",
      },
      {
        day: 3,
        title: "Relaxation & Spa",
        description: "Breakfast. Couples spa treatment (90 minutes). Lunch. Free time to explore or relax. Evening entertainment. Candlelight dinner at specialty restaurant.",
      },
      {
        day: 4,
        title: "Marine Experience",
        description: "Early breakfast. Scuba diving or dolphin watching tour. Lunch. Beach relaxation. Photography session. Farewell BBQ dinner.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast. Check-out. Speedboat transfer to airport. Depart with beautiful memories.",
      },
    ],
    inclusions: [
      "4 nights in overwater villa",
      "Daily breakfast, lunch, and dinner",
      "Speedboat transfers",
      "Welcome drinks and amenities",
      "Snorkeling equipment",
      "Water sports (non-motorized)",
      "Romantic beach dinner",
      "Couples spa treatment",
      "Sunset cruise",
      "All taxes and service charges",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Alcoholic beverages",
      "Scuba diving (additional cost)",
      "Motorized water sports",
      "Personal expenses",
      "Tips and gratuities",
    ],
  };

  const faqs = [
    {
      question: "What is the best time to visit Maldives?",
      answer: "The best time to visit Maldives is between November and April when the weather is dry and sunny. However, the Maldives can be visited year-round.",
    },
    {
      question: "Do I need a visa for Maldives?",
      answer: "Indian citizens get a free 30-day visa on arrival. Just ensure your passport is valid for at least 6 months from your arrival date.",
    },
    {
      question: "What is included in the package price?",
      answer: "The package includes accommodation, meals, transfers, and activities as listed in the inclusions. International flights and personal expenses are not included.",
    },
    {
      question: "Can I customize this package?",
      answer: "Yes! We can customize the package according to your preferences. Contact our team to discuss your requirements.",
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 30+ days before departure: 90% refund. 15-29 days: 50% refund. Less than 15 days: No refund. Travel insurance is recommended.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{marginTop: '-5rem'}}>
      {/* Image Gallery */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={packageData.images[selectedImage]}
                  alt={packageData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {packageData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-[100px] lg:h-[156px] rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-4 ring-[#FF7B00]" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Info */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-[#00BFA6] text-white">{packageData.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {packageData.destination}
                </div>
              </div>

              <h1 className="mb-4">{packageData.title}</h1>

              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{packageData.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⭐ {packageData.rating}</span>
                  <span className="text-sm">({packageData.reviews} reviews)</span>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4">About This Package</h3>
                      <p className="text-gray-700 leading-relaxed">{packageData.overview}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-6">Day-by-Day Itinerary</h3>
                      <div className="space-y-6">
                        {packageData.itinerary.map((day) => (
                          <div key={day.day} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#004C91] text-white rounded-full flex items-center justify-center">
                              {day.day}
                            </div>
                            <div className="flex-1">
                              <h4 className="mb-2">{day.title}</h4>
                              <p className="text-gray-600">{day.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="inclusions" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-600" />
                          What's Included
                        </h3>
                        <ul className="space-y-2">
                          {packageData.inclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                              <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 flex items-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          What's Not Included
                        </h3>
                        <ul className="space-y-2">
                          {packageData.exclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                              <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-6">Frequently Asked Questions</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-gray-500 line-through">₹{packageData.originalPrice}</span>
                      <Badge className="bg-green-600 text-white">Save 20%</Badge>
                    </div>
                    <p className="text-[#004C91]" style={{ fontSize: '2rem', fontWeight: 700 }}>
                      ₹{packageData.price}
                    </p>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Next available: Nov 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Min. 2 travelers</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-[#FF7B00] hover:bg-[#FF7B00]/90 text-white"
                      onClick={() => navigate("/contact")}
                    >
                      Book This Package
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate("/custom-trip")}
                    >
                      Customize This Trip
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 text-[#004C91] hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                      </a>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                    <p className="mb-2">✓ Free cancellation up to 30 days</p>
                    <p className="mb-2">✓ 24/7 customer support</p>
                    <p>✓ Secure payment options</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
