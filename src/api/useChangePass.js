import { useContext } from "react"
import { axiosPrivate as axios } from "../utility/axiosConfig"
import SiteContext from "../context/SiteContext"


const useChangePass = (userID, oldPass, newPass) => {
  const { dispatch } = useContext(SiteContext)

  const changePass = async () => {
    // AXIOS: Change User Password //
    await axios
    .post('/passwordChange',{
      _id: userID,
      oldPass: oldPass,
      newPass: newPass
    },{})
    .then(function(res) {
      if (res.status === 200  || res.statusText === 'OK') {
        dispatch({ type: 'formMsg', payload: res?.data?.message })
      } else {
        console.log(res)
      }
    })
    .catch(function(error) {
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
    
  return changePass
}


export default useChangePass