import axios from 'axios';
import { Skip } from '../types';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';
export const fetchSkipsByLocation = async (): Promise<Skip[]> => {
  try {
  
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data as Skip[];
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw error;
  }
};
