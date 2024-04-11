import { axiosPrivate as axios } from "../utility/axiosConfig"
import useLogout from '../api/useLogout'
import { useContext } from "react"
import SiteContext from "../context/SiteContext"

const useDeleteUser = (_id, password) => {
  const { dispatch } = useContext(SiteContext)
  const logout = useLogout()

  const deleteUser = async () => {
    await axios
    .post('/accountDelete', {
      _id: _id,
      password: password
    })
    .then(function(res) {
      if (res.status === 200  || res.statusText === 'OK') {
        dispatch({ type: 'deleteMsg', payload: 'Account Deleted!' })
        console.log(_id, 'Account Deleted!')
        logout()
        dispatch({ type: 'deleteMsg', payload: '' })
        dispatch({ type: 'formMsg', payload: 'Account Deleted!' })
      }
    })
    .catch(function(error) {
      if (error.response) {
        if (error.response.data.message) {
          dispatch({ type: 'deleteMsg', payload: error.response.data.message })
        } else {
          console.log(error)
        }
      } else if (!error.response) {
        if (error.message) {
          dispatch({ type: 'deleteMsg', payload: error.message })
        } else {
          console.log(error)
        }
      }
    })
  }

  return deleteUser
}

export default useDeleteUser