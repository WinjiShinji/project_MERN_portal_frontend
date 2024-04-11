import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import { useNavigate } from "react-router-dom"

const useLogout = () => {
  const { dispatch } = useContext(SiteContext)
  const navigate = useNavigate()
  const logout = () => {
    try {
      dispatch({ type: 'isLoggedIn', payload: false })
      if (sessionStorage.getItem('accessToken')) {
        sessionStorage.setItem('accessToken', '')
      }
      navigate('/', { replace: true })
      dispatch({ type: 'formMsg', payload: 'Logged Out' })
      dispatch({ type: 'userInfo', payload: {} })
      dispatch({ type: 'admin', payload: false })
    } catch (error) {
      console.error(error)
    }
  }

  return logout
}

export default useLogout