import axios from 'axios';
import {DataRequest, CreateDataRequest} from './dataType';
const baseURL = 'https://backend-app-hyo5g.ondigitalocean.app'; 
const apiClient = axios.create({
    baseURL,
})


export const getDataRequest = async () => {

    try {
        const response = await apiClient.get<DataRequest[]>('/api/v1/submissions');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const submitTripRequest = async (formData: {
    destination: string;
    travelers: string;
    duration: string;
    budget: string;
    travelDates: string;
    interests: string[];
    accommodation: string;
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
}): Promise<DataRequest> => {
    try {
        const payload: CreateDataRequest = {
            destination: formData.destination,
            numberOfTravellers: parseInt(formData.travelers.split('-')[0]) || 1,
            tripDuration: formData.duration,
            dates: formData.travelDates,
            budget: formData.budget,
            hotelPreference: formData.accommodation,
            interests: formData.interests.join(', '),
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
        };

        const response = await apiClient.post<DataRequest>('/api/v1/submit', payload);
        return response.data;
    } catch (error) {
        console.error('Error submitting trip request:', error);
        throw error;
    }
}

export const planTrip = async() => {
    
}