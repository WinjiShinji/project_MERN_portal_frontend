import { useContext } from "react"
import { axiosPrivate as axios } from "../../utility/axiosConfig"
import AdminContext from "../../context/AdminContext"

const useAdminDelete = (id) => {
  const { setEditMsg } = useContext(AdminContext)

  const adminDelete = async () => {
    await axios
      .delete('/admin', {
        params: {
          _id: id.toString()
        }
      })
      .then(function(res) {
        if (res?.status === 200) {
          setEditMsg('Account Delete Success')
        } else {
          console.log(res)
        }
      })
      .catch(function(err) {
        if (err?.response?.data?.message) {
          setEditMsg(err?.response?.data?.message)
        } else {
          console.log(err)
        }
      })
  }
  
  return adminDelete
}

export default useAdminDelete