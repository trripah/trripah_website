import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";
import HomeImage from '../assets/bg.png';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const contactStyles = `
    @media (min-width: 768px) {
      .contact-info-section {
        padding-left: 40px;
        padding-right: 40px;
      }
    }
  `;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call us",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@trripah.com", "support@trripah.com"],
      action: "Send email",
      link: "mailto:hello@trripah.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Travel Street", "Mumbai, Maharashtra 400001"],
      action: "Get directions",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
      action: null,
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{contactStyles}</style>
      {/* Hero */}
      <section className="relative h-auto md:h-[400px] flex items-center justify-center overflow-hidden" style={{ marginTop: '-5rem', paddingTop: '5rem' }}>
        <ImageWithFallback
                  src={HomeImage}
                  alt="Travel Packages Background"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 text-center relative z-10"
        style={{paddingTop: '3rem',paddingBottom:'3rem'}}>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700 }}>Get in Touch</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out and let's plan your perfect trip together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 contact-info-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FF7B00] rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3">{info.title}</h3>
                  <div className="space-y-1 text-gray-600 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                  {info.action && info.link && (
                    <a
                      href={info.link}
                      className="text-[#004C91] hover:underline inline-flex items-center"
                    >
                      {info.action} →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-input-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-input-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      required
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Assistance</SelectItem>
                        <SelectItem value="package">Package Information</SelectItem>
                        <SelectItem value="custom">Custom Trip Request</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-input-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF7B00] hover:bg-[#FF7B00]/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info & Map */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="text-white"
              style={{background : 'linear-gradient(to right, #004C91, #00BFA6)'}}
              >
                <CardContent className="p-8">
                  <h3 className="text-white mb-6">Prefer Instant Communication?</h3>
                  <div className="space-y-4">
                    <Button
                      onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                      className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                    <Button
                      onClick={() => window.location.href = "tel:+919876543210"}
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-[#004C91]"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </Button>
                  </div>
                  <p className="text-white/80 text-sm mt-6">
                    Our team typically responds within 15 minutes during business hours!
                  </p>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64280874083!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="trripah Office Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-3">Have a Quick Question?</h4>
                  <p className="text-gray-600 mb-4">
                    Check out our FAQ section or browse our popular packages for instant answers.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => onNavigate("packages")}
                      variant="outline"
                      size="sm"
                    >
                      View Packages
                    </Button>
                    <Button
                      onClick={() => onNavigate("blog")}
                      variant="outline"
                      size="sm"
                    >
                      Read Blog
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-12 bg-[#FFF3E0]">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-[#FF7B00] mx-auto mb-4" />
              <h3 className="mb-4">24/7 Emergency Support</h3>
              <p className="text-gray-600 mb-6">
                While our office hours are Mon-Sat 9 AM - 8 PM, we provide 24/7 emergency support 
                for travelers during their trips. Your safety and comfort are our top priorities.
              </p>
              <Button
                onClick={() => window.location.href = "tel:+919876543210"}
                className="bg-[#004C91] hover:bg-[#004C91]/90 text-white"
              >
                Emergency Hotline
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
