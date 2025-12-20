// ... (other imports remain the same)
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Clock, Users, MapPin, Check, X, Calendar, Phone, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import packageDetailsData from "../data/PackageDetailsData.json";

export function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // --- UPDATED CSS HERE ---
  const packageDetailStyles = `
    @media (min-width: 1024px) {
      .package-info-section {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
    .tabs-overlay-container {
      position: sticky; /* Changed from relative to sticky */
      top: 7.5rem;        /* This determines where it stops. Increased to account for the -50% transform */
      
      width: 100%;
      display: flex;
      justify-content: center;
      
      /* Keeps your original overlap effect */
      transform: translate(0.5rem, -50%);
      
      z-index: 50; /* Increased z-index so it slides OVER the text content below */
      margin-bottom: 0; 
      pointer-events: none; /* Optional: lets clicks pass through empty space to content below */
    }
    
    .tabs-overlay-wrapper {
      background: white;
      border-radius: 9999px;
      padding: 0.5rem 0.5rem; /* Adjusted padding for cleaner look */
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      display: inline-flex; /* Ensures wrapper hugs the content */
      pointer-events: auto;
      overflow-x: auto;
      max-width: calc(100vw - 2rem);
    }

    .tabs-overlay-wrapper button[data-state="active"] {
      background-color: #1b06ff !important;
      color: white !important;
    }
    
    @media (max-width: 1023px) {
      .tabs-overlay-wrapper {
        max-width: calc(100vw - 1rem);
        padding: 0.35rem 0.35rem;
      }
      
      .tabs-overlay-wrapper button {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        font-size: 0.8rem;
      }
    }

    .highlight-card {
      position: relative;
      height: 300px;
      border-radius: 12px;
      overflow: hidden;
    }

    .highlight-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }

    .highlight-card:hover .highlight-image {
      transform: scale(1.1);
    }

    .highlight-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      padding: 1.5rem 1rem;
      display: flex;
      align-items: flex-end;
      height: 100%;
    }

    .highlight-title {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.4;
    }

   /* --- NEW STYLES FOR ITINERARY TIMELINE --- */
    .itinerary-timeline {
      position: relative;
      padding-left: 2rem; /* Creates space for the line and circles */
      min-height: 100%; /* Ensures the container has height for the line */
    }

    .itinerary-timeline::before {
      content: '';
      position: absolute;
      left: 0.5rem; /* Position the line */
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #1b06ff; /* Blue line color */
      z-index: 1; /* Ensure it appears behind content but visible */
    }

    .itinerary-day-marker {
      position: absolute;
      left: -1.75rem; /* Position the circle to the left of the day content */
      top: 1rem; /* Adjust this value if needed for vertical alignment */
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: white;
      border: 2px solid #1b06ff; /* Border matches the line color */
      z-index: 10;
    }

    .itinerary-day-content {
      padding-left: 1.5rem; /* Space between the circle/line and the text */
    }

    .itinerary-day-title {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .itinerary-day-title {
        font-size: 0.875rem;
      }
    }
  `;

  const packageData = useMemo(() => {
    return packageDetailsData.find(pkg => pkg.id === id);
  }, [id]);

  if (!packageData) return <div>Loading...</div>; // Simplified for brevity

  // ... (faqs array remains the same) ...
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
    <div className="min-h-screen bg-gray-50" style={{marginTop: '-5rem' }}>
      <style>{packageDetailStyles}</style>
      
      {/* Image Gallery */}
      <section className="bg-black relative z-10">
        <div className="container mx-auto px-2 sm:px-4" style={{ paddingTop: '0.5rem', paddingBottom: '2.5rem' }}> {/* Added bottom padding to give space for visual balance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
             {/* ... Images Code Remains Same ... */}
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

      {/* Package Info - Removed top padding so the tabs sit right on the edge */}
      <section className="pt-0 pb-8 px-2 sm:px-4 package-info-section relative z-0">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              
              {/* MOVED TABS WRAPPER HERE 
                 The Tabs component now wraps the Header Info and the Content 
              */}
              <Tabs defaultValue="overview" className="w-full">
                
                {/* 1. TABS LIST (Floating 50/50) */}
                <div className="tabs-overlay-container">
                  <div className="tabs-overlay-wrapper">
                    <TabsList className="bg-transparent p-0 h-auto">
                      <TabsTrigger value="overview" className="data-[state=active]:bg-[#1b06ff] data-[state=active]:text-white rounded-full px-6 py-2">About</TabsTrigger>
                      <TabsTrigger value="itinerary" className="data-[state=active]:bg-[#1b06ff] data-[state=active]:text-white rounded-full px-6 py-2">Daywise</TabsTrigger>
                      <TabsTrigger value="inclusions" className="data-[state=active]:bg-[#1b06ff] data-[state=active]:text-white rounded-full px-6 py-2">Accommodations</TabsTrigger>
                      <TabsTrigger value="faqs" className="data-[state=active]:bg-[#1b06ff] data-[state=active]:text-white rounded-full px-6 py-2">Policies</TabsTrigger>
                    </TabsList>
                  </div>
                </div>

                {/* 2. PERSISTENT HEADER INFO (Title, Rating, etc.) */}
                {/* Added mt-8 to push it down so it doesn't hide behind the floating tabs */}
                <div className="mt-8 mb-6"> 
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="bg-[#00BFA6] text-white">{packageData.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {packageData.destination}
                    </div>
                  </div>

                  <h1 className="mb-4 text-3xl font-bold">{packageData.title}</h1>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600">
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
                </div>

                {/* 3. TABS CONTENT */}
                <TabsContent value="overview" className="mt-6" style={{ marginBottom: '1rem' }}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-xl font-semibold">About This Package</h3>
                      <p className="text-gray-700 leading-relaxed">{packageData.overview}</p>
                      
                      {packageData.highlights && packageData.highlights.length > 0 && (
                        <div className="mt-8">
                          <h3 className="mb-6 text-xl font-semibold">Highlights</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {packageData.highlights.map((highlight, index) => (
                              <div key={index} className="highlight-card">
                                <ImageWithFallback
                                  src={highlight.image}
                                  alt={highlight.title}
                                  className="highlight-image"
                                />
                                <div className="highlight-overlay">
                                  <p className="highlight-title">{highlight.title}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

               <TabsContent value="itinerary" className="mt-6" style={{ marginBottom: '1rem' }}>
                <div className="space-y-4 itinerary-timeline"> {/* Apply the new class here */}
                  {packageData.itinerary.map((day, index) => (
                    <div key={day.day} className="border-b border-gray-300 relative">
                      {/* The White Circle Marker */}
                      <div className="itinerary-day-marker"></div>

                      {/* The Day Content */}
                      <div 
                        className="p-4 cursor-pointer hover:bg-gray-50 transition itinerary-day-content" // Apply the content class here
                        onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 mb-3" style={{marginLeft:'-2rem'}}>Day {day.day}</p>
                            
                            <div className="flex items-start gap-4">
                              {(day as any).image && (
                                <img 
                                  src={(day as any).image}
                                  alt={day.title}
                                  className="object-cover rounded"
                                  style={{ objectFit: 'cover', height: '150px', width: '50%', borderRadius: '8px', minHeight: '150px', minWidth: '50%' }}
                                />
                              )}
                              
                              <div className="flex-1">
                                <h4 className="font-semibold itinerary-day-title">{day.title}</h4>
                                
                                {selectedDay === day.day && (
                                  <div className="mt-3 pt-3">
                                    <p className="text-gray-700 itinerary-day-title">{day.description}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                              selectedDay === day.day ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

                <TabsContent value="inclusions" className="mt-6" style={{ marginBottom: '1rem' }}>
                   {/* ... Inclusions content ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 flex items-center gap-2 font-semibold">
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
                        <h3 className="mb-4 flex items-center gap-2 font-semibold">
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

                <TabsContent value="faqs" className="mt-6" style={{ marginBottom: '1rem' }}>
                   {/* ... FAQs content ... */}
                   <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-6 text-xl font-semibold">Frequently Asked Questions</h3>
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

            {/* Booking Card - Adjusted margin to align with new layout */}
           <div className="lg:col-span-1" style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
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