import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import axios from '../utility/axiosConfig'

const useRegister = () => {
  const { state, dispatch } = useContext(SiteContext)
  
  const register = async () => {
    // AXIOS: Create User //
    await axios.post('register',{
      username: state.formUsername,
      password: state.formPassword
    },{})
    .then(function (res) {
      if (res.status === 201 || res.statusText === "Created") {
        // Log In User //
        dispatch({ type: 'isRegistered', payload: true })
        if (res.data.message) {
          dispatch({ type: 'formMsg', payload: res.data.message })
        } else {
          dispatch({ type: 'formMsg', payload: res.statusText })
        }

        // Clear Form Inputs //
        dispatch({ type: 'formUsername', payload: '' })
        dispatch({ type: 'formPassword', payload: '' })
        dispatch({ type: 'formConPass', payload: '' })
        // Remove Login Message //
        dispatch({ type: 'formMsg', payload: '' })
      }
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
      } else {
        console.log(error)
      }
    })
  }

  return register
}

export default useRegister