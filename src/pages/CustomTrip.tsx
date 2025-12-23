import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Progress } from "../components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { submitTripRequest } from "../utils/ApiHandling";
import BGimage from "../assets/bg.webp";
import DetailsData from '../data/DetailsData.json';

export function CustomTrip() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    travelers: "",
    duration: "",
    budget: "",
    travelDates: "",
    interests: [] as string[],
    accommodation: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.destination || !formData.travelers || !formData.duration || !formData.budget || !formData.accommodation || !formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitTripRequest(formData);
      toast.success("Trip request submitted! Our team will contact you within 24 hours.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Failed to submit trip request. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = DetailsData.interests;

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FFF3E0] to-white" style={{marginTop: '-5rem',backgroundColor:'#FFF1E3'}}>
      {/* Header with Background Image - Full Width */}
      <div 
        className="w-full py-20 px-6 bg-cover bg-center relative mb-3"
        style={{
          backgroundImage: `url(${BGimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-white" style={{fontWeight: 'bold', fontSize: 'clamp(2rem, 1vw, 3rem)',marginTop:'2rem'}}>Build Your Custom Trip</h1>
          <p className="text-white max-w-2xl mx-auto">
            Tell us about your dream vacation and we'll create a personalized itinerary just for you
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12" >

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Form Card */}
        <Card>
          <CardContent className="p-8">
            {/* Step 1: Destination & Basics */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="mb-6">Where would you like to go?</h2>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) => setFormData({ ...formData, destination: value })}
                  >
                    <SelectTrigger id="destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="maldives">Maldives</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="bali">Bali</SelectItem>
                      <SelectItem value="vietnam">Vietnam</SelectItem>
                      <SelectItem value="multiple">Multiple Destinations</SelectItem>
                      <SelectItem value="surprise">Surprise Me!</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers *</Label>
                    <Select
                      value={formData.travelers}
                      onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                    >
                      <SelectTrigger id="travelers">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo (1 person)</SelectItem>
                        <SelectItem value="2">Couple (2 people)</SelectItem>
                        <SelectItem value="3-4">Small Group (3-4)</SelectItem>
                        <SelectItem value="5-8">Group (5-8)</SelectItem>
                        <SelectItem value="9+">Large Group (9+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Trip Duration *</Label>
                    <Select
                      value={formData.duration}
                      onValueChange={(value) => setFormData({ ...formData, duration: value })}
                    >
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 Days</SelectItem>
                        <SelectItem value="6-8">6-8 Days</SelectItem>
                        <SelectItem value="9-12">9-12 Days</SelectItem>
                        <SelectItem value="13+">13+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                  <Input
                    id="travelDates"
                    type="date"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    className="bg-input-background"
                  />
                  <p className="text-sm text-gray-500">Flexible dates? We'll help you find the best time!</p>
                </div>
              </div>
            )}

            {/* Step 2: Budget & Accommodation */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="mb-6">Budget & Accommodation Preferences</h2>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (per person) *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget: Under ₹20,000</SelectItem>
                      <SelectItem value="moderate">Moderate: ₹20,000 - ₹40,000</SelectItem>
                      <SelectItem value="comfortable">Comfortable: ₹40,000 - ₹70,000</SelectItem>
                      <SelectItem value="luxury">Luxury: ₹70,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation">Accommodation Preference *</Label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
                  >
                    <SelectTrigger id="accommodation">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget Hotels / Hostels</SelectItem>
                      <SelectItem value="3star">3-Star Hotels</SelectItem>
                      <SelectItem value="4star">4-Star Hotels</SelectItem>
                      <SelectItem value="5star">5-Star Luxury Hotels</SelectItem>
                      <SelectItem value="resort">Beach/Island Resorts</SelectItem>
                      <SelectItem value="boutique">Boutique Hotels</SelectItem>
                      <SelectItem value="mixed">Mix of Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card className="bg-[#FFF3E0] border-[#FF7B00]">
                  <CardContent className="p-4">
                    <p className="text-sm">
                      💡 <span style={{ fontWeight: 600 }}>Pro Tip:</span> Flexible with dates? 
                      You can save up to 30% by traveling during shoulder season!
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Interests & Activities */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="mb-6">What interests you?</h2>
                <p className="text-gray-600 mb-4">Select all that apply</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestToggle(interest)}
                      />
                      <Label
                        htmlFor={interest}
                        className="cursor-pointer"
                        style={{ fontWeight: 400 }}
                      >
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mt-8">
                  <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any dietary restrictions, accessibility needs, celebration occasions, or specific activities you'd like to include..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    rows={4}
                    className="bg-input-background"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="mb-6">Almost done! How can we reach you?</h2>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input-background"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input-background"
                    />
                  </div>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p style={{ fontWeight: 600 }} className="mb-1">What happens next?</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Our travel expert will review your requirements</li>
                        <li>• We'll create a customized itinerary within 24 hours</li>
                        <li>• You'll receive a detailed quote via email & WhatsApp</li>
                        <li>• We'll refine the plan until it's perfect for you</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-[#FF7B00] hover:bg-[#FF7B00]/90 text-white"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-[#004C91] hover:bg-[#004C91]/90 text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Trip Request"}
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Need help planning? We're here for you!</p>
          <Button
            variant="link"
            onClick={() => navigate("/contact")}
            className="text-[#FF7B00]"
          >
            Contact Our Travel Experts
          </Button>
        </div>
      </div>
    </div>
  );
}
