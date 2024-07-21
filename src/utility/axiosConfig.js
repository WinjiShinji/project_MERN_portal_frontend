import axios from "axios"
const BASE_URL = "52.41.36.82"

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
