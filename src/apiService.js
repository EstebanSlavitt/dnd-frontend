import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const getClasses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/classes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching classes", error);
    return [];
  }
};

export const getRaces = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/races`);
    return response.data;
  } catch (error) {
    console.error("Error fetching races", error);
    return [];
  }
};
