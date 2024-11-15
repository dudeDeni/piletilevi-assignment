import axios from "axios";

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
});

export default axiosInstance;