import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import axios from '../utility/axiosConfig'


const useLogin = () => {
  const { state, dispatch } = useContext(SiteContext)

  const login = async () => {
    // AXIOS: Get User //
    await axios
      .post('login', {
        username: state.formUsername,
        password: state.formPassword
      },{})
      .then(function (res) {
        if (res.status === 200  || res.statusText === 'OK') {
          dispatch({ type: 'isLoggedIn', payload: true })
          dispatch({ type: 'formMsg', payload: 'Login Successful.' })
        
          // Clear Form Inputs //
          dispatch({ type: 'formUsername', payload: '' })
          dispatch({ type: 'formPassword', payload: '' })
        }
      
        // Store Access Token //
        if (res.data.accessToken) {
          const accessToken = `Bearer ${res.data.accessToken}`
          sessionStorage.setItem('accessToken', accessToken)
        }

        // Remove Login Message //
        dispatch({ type: 'formMsg', payload: '' })
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.data.message) {
            dispatch({ type: 'formMsg', payload: error.response.data.message })
          } else {
            console.log(error)
          }
        } else if (!error.response) {
          if (error.message) {
            dispatch({ type: 'formMsg', payload: error.message })
          } else {
            console.log(error)
          }
        }
      })
  }
  
  return login
}

export default useLogin