import { useContext } from "react"
import useUserInfo from "../api/useUserInfo"
import AccountDetails from "./AccountDetails"
import SiteContext from "../context/SiteContext"

const UserAccount = ({ userId }) => {
  const { state } = useContext(SiteContext)

  // AXIOS: Fetch Account Data //
  useUserInfo()

  return (
    <main className="acc_page">
      <div className="acc_header">
        <h1>Welcome {state.userInfo.username || 'User'}</h1>
        <h2>ID: {state.userInfo._id || 'No ID'}</h2>
        <p>
          last login: {state.userInfo.loginOldDate || 'Unknown'}
        </p>
      </div>
      <AccountDetails />
    </main>
  )
}

export default UserAccount