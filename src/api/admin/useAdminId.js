import { useContext } from "react"
import { axiosPrivate as axios } from "../../utility/axiosConfig"
import AdminContext from "../../context/AdminContext"

const useAdminId = (userId) => {
  const { setUserDetails, setAdminMsg } = useContext(AdminContext)

  const searchById = async () => {
    await axios
      .get(`/admin`, {
        params: {
          _id: userId.toString()
        }
      })
      .then(function(res) {
        if (res?.data) {
          setUserDetails(res?.data)
          setAdminMsg('Success')
        } else {
          console.log(res)
        }
      })
      .catch(function(err) {
        if (err?.response?.data?.message) {
          setAdminMsg(err?.response?.data?.message)
        } else {
          console.log(err)
        }
      })
  }

  return searchById
}

export default useAdminId