import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_BASE_URL}/signup`,
    userData
  );

  return response.data;
};