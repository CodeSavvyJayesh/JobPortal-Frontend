import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

export const loginUser = async (loginData) => {
  const response = await axios.post(
    `${API_BASE_URL}/login`,
    loginData
  );

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_BASE_URL}/signup`,
    userData
  );

  return response.data;
};