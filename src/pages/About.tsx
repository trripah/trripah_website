import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Shield, Heart, Award, Users, MapPin, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import DetailsData from '../data/DetailsData.json';

export function About() {
  const navigate = useNavigate();
  const aboutStyles = `
    @media (min-width: 768px) {
      .about-values {
        padding-left: 4rem;
        padding-right: 4rem;
      }
    }
  `;

  const valuesData = DetailsData.aboutValues;
  const values = valuesData.map(val => ({
    ...val,
    icon: val.title === "Passion for Travel" ? Heart :
          val.title === "Safety & Trust" ? Shield :
          val.title === "Excellence in Service" ? Award : Users,
  }));

  const stats = DetailsData.aboutStats;
  const team = DetailsData.teamMembers;
  const partners = DetailsData.partners;

  return (
    <div className="min-h-screen">
      <style>{aboutStyles}</style>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden" style={{ marginTop: '-5rem', paddingTop: '5rem' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709572366321-524da39b27e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBoYXBweSUyMHRvdXJpc3RzfGVufDF8fHx8MTc2MTgyMDk4OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About trripah"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>About trripah</h1>
          <p className="text-white/90 max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
            Making travel dreams come true, one journey at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="mb-2" style={{ fontSize: '2rem', fontWeight: 400 }}>Our Story</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Trripah was born from a shared passion for travel and a simple yet powerful idea — every journey should feel effortless, personal, and unforgettable. Founded in 2025 by a group of avid travelers, we set out to reimagine international travel for modern Indians who seek more than just destinations.
              </p>
              <p>
                What started as a vision has grown into a thoughtfully crafted travel brand, built on first-hand experiences, trusted global partnerships, and an uncompromising attention to detail. From the turquoise waters of Southeast Asia to the vibrant cities of the Middle East, we design journeys that balance comfort, discovery, and authenticity.
              </p>
              <p>
                Today, Trripah stands as your travel companion — guiding you, supporting you, and taking care of every detail while you focus on creating memories. Because we believe the most meaningful journeys aren’t just planned — they’re felt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16  text-white"
      style={{background: 'linear-gradient(to right, #004C91, #003366)'}}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-white mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  {stat.number}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#FFF3E0] about-values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every trip we plan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#FF7B00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className=" text-white"
            style={{background: 'linear-gradient(to bottom right, #004C91, #00BFA6)'}}
            >
              <CardContent className="p-12 text-center">
                <h2 className="text-white mb-6">Our Promise to You</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-6 h-6" />
                      <h4 className="text-white">Curated Experiences</h4>
                    </div>
                    <p className="text-white/90">
                      Every destination is handpicked and every activity is tested by our team.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-6 h-6" />
                      <h4 className="text-white">Your Safety First</h4>
                    </div>
                    <p className="text-white/90">
                      24/7 support, verified partners, and comprehensive travel insurance options.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-6 h-6" />
                      <h4 className="text-white">Transparent Pricing</h4>
                    </div>
                    <p className="text-white/90">
                      No hidden costs. What you see is what you pay. Simple and honest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your unforgettable journeys
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-[#FF7B00] mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry leaders to bring you the best travel experiences
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-gray-400 hover:text-[#004C91] transition-colors"
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white"
      style={{background: 'linear-gradient(to right, #FF7B00, #FF9500)'}}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4" style={{fontSize:'2rem',fontWeight:700}}>Ready to Start Your Adventure?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who trusted us with their journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/packages")}
              size="lg"
              className="bg-white text-[#FF7B00] hover:bg-gray-100"
            >
              Explore Packages
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="border-white text-[#FF7B00]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
