import { createContext, useEffect } from "react";
import { axiosPrivate as axios } from "../utility/axiosConfig";
import useRefreshToken from "../api/useRefreshToken"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const refreshToken = useRefreshToken()
  
  useEffect(() => {
    // Request Intercept //
      const req = () => axios.interceptors.request.use(function (config) {
        if (!config.headers['Authorization']) {
          const accessToken = sessionStorage.getItem('accessToken') || ''
          config.headers['Authorization'] = accessToken
        }
        return config
      }, function (error) {
        return Promise.reject(error)
      })
      req()
      
      // Response Intercept // 
      const res = () => axios.interceptors.response.use(function (response) {
        return response
      }, async function (error) {
        const prevConfig = error?.config
        if (error?.response?.status === 403) {
          const newAccessToken = await refreshToken()
          prevConfig.headers.Authorization = newAccessToken
        }
        return Promise.reject(error)
      })
      res()

      return (
        axios.interceptors.request.eject(req),
        axios.interceptors.response.eject(res)
        )
  },[refreshToken])
    
    return (
      <AuthContext.Provider value={{
        
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext