import axios from "axios";

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_JSON_SERVER_URI;

const axiosClient = axios.create({
  baseURL: DEFAULT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
