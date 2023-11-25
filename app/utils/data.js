

import axios from 'axios';

export const getDeals = async () => {
  try {
    const response = await axios.get('http://localhost:8000/products');
    return response.data; 
  } catch (error) {
    console.log(error);
    throw error; 
  }
};
