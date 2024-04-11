import axios from 'axios'
const BASE_URL = 'http://localhost:3500'

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    ContentType: 'application/json',
  },
  withCredentials: true // Allows httpCookies to be sent
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    ContentType: 'application/json'
  }, 
  withCredentials: true // Allows httpCookies to be sent
})