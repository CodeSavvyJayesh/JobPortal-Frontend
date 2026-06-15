import axios from "axios";

const API_URL =
  "http://localhost:8080/api/user/profile";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getProfile = async () => {

  const response = await axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};

export const createProfile = async (
  profileData
) => {

  const response = await axios.post(
    API_URL,
    profileData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};

export const updateProfile = async (
  profileData
) => {

  const response = await axios.put(
    API_URL,
    profileData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};