import axios from "axios"
const BASE_URL = "https://project-mern-portal-back-end.onrender.com"

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    ContentType: "application/json",
  },
  withCredentials: true, // Allows httpCookies to be sent
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    ContentType: "application/json",
  },
  withCredentials: true, // Allows httpCookies to be sent
})
