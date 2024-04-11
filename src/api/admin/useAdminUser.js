import { axiosPrivate as axios } from "../../utility/axiosConfig"
import { useContext } from "react"
import AdminContext from "../../context/AdminContext"

const useAdminUser = (username) => {
  const { setUserDetails, setAdminMsg } = useContext(AdminContext)

  const searchByUser = async () => {
    await axios
      .get(`/admin`, {
        params: {
          username: username.toString()
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

  return searchByUser
}

export default useAdminUser