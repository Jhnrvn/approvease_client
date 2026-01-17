import axios from "axios";

const prod: boolean = process.env.NODE_ENV === "production";

// create axios instance with base url
export const api = axios.create({
  baseURL: prod
    ? "https://approvease.onrender.com/api/v1"
    : "http://localhost:5000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
