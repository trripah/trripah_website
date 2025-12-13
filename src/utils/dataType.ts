export interface CreateDataRequest {
  destination: string;
  numberOfTravellers: number;
  tripDuration: string;
  dates: string;
  budget: string;
  hotelPreference: string;
  interests: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface DataRequest extends CreateDataRequest {
  id: string;
  collectedAt: Date;
  refNumber: string;
}

export interface TripPlan {
  id: string;
  dataRequestId: string;
  itinerary: string;
  recommendations: string;
  createdAt: Date;
}