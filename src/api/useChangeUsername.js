import { useContext } from "react"
import { axiosPrivate as axios } from "../utility/axiosConfig"
import SiteContext from "../context/SiteContext"

const useChangeUsername = (username) => {
  const { state, dispatch } = useContext(SiteContext)
  
  const changeUsername = async () => {
    // AXIOS: Change Username //
    await axios
    .post('usernameChange',{
      _id: state.userInfo._id,
      newUsername: username
    })
    .then(function(res) {
      if (res.status === 200  || res.statusText === 'OK') {
        dispatch({ type: 'formUserMsg', payload: res?.data?.message })
      } else {
        console.log(res)
      }
    })
    .catch(function(error) {
      if (error.response) {
        if (error.response.data.message) {
          dispatch({ type: 'formUserMsg', payload: error.response.data.message })
        } else {
          console.log(error)
        }
      } else if (!error.response) {
        if (error.message) {
          dispatch({ type: 'formUserMsg', payload: error.message })
        } else {
          console.log(error)
        }
      }
    })
    
  }
  
  return changeUsername
}

export default useChangeUsername