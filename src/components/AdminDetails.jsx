import { useContext } from "react"
import AdminContext from "../context/AdminContext"

const AdminDetails = () => {
  // State //
  const { userDetails } = useContext(AdminContext)

  // Calculation //
  let userRoles
  if (userDetails.roles) {
    userRoles = Object.entries(userDetails.roles).map((item) => (
      <span key={item}>{item}, </span>
    ))
  }

  return (
    <div className="admin_details">
      <h2>User Details</h2>
      <p><span>UserID: </span>{userDetails._id || 'No Info'}</p>
      <p><span>Username: </span>{userDetails.username || 'No Info'}</p>
      <p><span>Previous Login: </span>{userDetails.loginOldDate || 'No Info'}</p>
      <p><span>Recent Login: </span>{userDetails.loginNewDate || 'No Info'}</p>
      <p><span>User Roles: </span>{userRoles || 'No Info'}</p>
    </div>
  )
}

export default AdminDetails