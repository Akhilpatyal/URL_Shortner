// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:800",
  timeout: 10000, // 10 second timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    // Handle different error statuses
    if (response) {
      switch (response.status) {
        case 400:
          console.log("Bad request", response.data.message);
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error(`Error with status code: ${response.status}`);
      }

      return Promise.reject(response.data || "Something went wrong");
    }

    // Network errors or request cancelled
    if (error.request) {
      console.error("No response received from server");
      return Promise.reject("Network error - please check your connection");
    }

    // Request setup errors
    return Promise.reject(error.message || "Request failed");
  }
);

// Automatically add token if exists
// axiosInstance.defaults.headers.common['Authorization'] =
//   `Bearer ${localStorage.getItem("userToken")}`;

export default axiosInstance;
