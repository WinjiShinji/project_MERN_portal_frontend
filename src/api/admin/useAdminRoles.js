import { useContext } from "react"
import { axiosPrivate as axios } from "../../utility/axiosConfig"
import AdminContext from "../../context/AdminContext"


const useAdminRoles = (userId) => {
  const { setEditMsg } = useContext(AdminContext)
  const adminRoles = async () => {
    await axios
      .put('/admin', {
        _id: userId.toString()
      })
      .then(function(res) {
        if (res?.data?.message) {
          setEditMsg(res?.data?.message)
        } else {
          console.log(res)
        }
      })
      .catch(function(err) {
        if (err?.response?.data?.message) {
          console.log(err?.response?.data?.message)
        } else {
          console.log(err)
        }
      })   
  }

  return adminRoles
}

export default useAdminRoles