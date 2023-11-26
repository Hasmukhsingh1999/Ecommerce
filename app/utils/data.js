import axios from "axios";

const fetchProductsData = async (productName) => {
  try {
    const response = await axios.get(
      `https://backend-ecom-fzpl.onrender.com/${productName}`
    );
    return response.data;
  } catch (error) {
    console.log(`Error fetching ${productName} deals :`, error);
    throw error;
  }
};

export const getDeals = async () => {
  return fetchProductsData("iphone");
};

export const getOtherDeals = async () => {
  return fetchProductsData("samsung");
};

export const sonyDeals = async () => {
  return fetchProductsData("sony");
};
