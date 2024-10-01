import axios from "axios";

// Axios instance for User API
const hostName = process.env.NODE_ENV === "development" ? "http://localhost:8001" : process.env.URL;
export const userAPI = axios.create({
  baseURL: hostName + "/api/v1/users",
  timeout: 5000,
  withCredentials: true, // Allow credentials (cookies, etc.)
});

// Axios instance for Menu API
export const menuAPI = axios.create({
  baseURL: hostName + "/api/v1/menus",
  timeout: 5000,
  withCredentials: true, // Allow credentials (cookies, etc.)
});
// Axios instance for Order API
export const orderAPI = axios.create({
  baseURL: hostName + "/api/v1/orders",
  timeout: 5000,
  withCredentials: true, // Allow credentials (cookies, etc.)
});
// Axios instance for Billing API
export const billingAPI = axios.create({
  baseURL: hostName + "/api/v1/billings",
  timeout: 5000,
  withCredentials: true, // Allow credentials (cookies, etc.)
});

export const tableAPI = axios.create({
  baseURL: hostName + "/api/v1/tables",
  timeout: 5000,
  withCredentials: true, // Allow credentials (cookies, etc.)
});

export const createUserAPI = axios.create({
  baseURL: hostName + "/api/v1/users",
  timeout: 10000,
  withCredentials: true, // Allow credentials (cookies, etc.)
  headers: {
    "Content-Type": "multipart/form-data", // For file uploads
  },
});

export const addMenuItems = axios.create({
  baseURL: hostName + "/api/v1/menus",
  timeout: 10000,
  withCredentials: true, // Allow credentials (cookies, etc.)
  headers: {
    "Content-Type": "multipart/form-data", // For file uploads
  },
});
