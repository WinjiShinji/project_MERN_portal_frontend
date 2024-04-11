import { useContext, useState } from "react"
import AdminContext from "../context/AdminContext"
import useAdminDelete from "../api/admin/useAdminDelete"
import useAdminRoles from "../api/admin/useAdminRoles"

const AdminChange = () => {
  // State //
  const { userDetails, editMsg } = useContext(AdminContext)
  const [deleteConfirm, setDeleteConfirm] = useState(true)
  const adminDelete = useAdminDelete(userDetails._id || '')
  const adminRole = useAdminRoles(userDetails._id || '')

  // Events //
  const deleteAccount = (e) => {
    e.preventDefault()
    try {
      adminDelete()
      setDeleteConfirm(true)
    } catch (err) {
      console.log(err)
    }
  }
  const createAdmin = (e) => {
    e.preventDefault()
    try {
      adminRole()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="admin_change">
      <h2>User Edit</h2>
      {/* Change User Roles */}
      <p><span>Admin Privilege:</span>
        <button
          type="button"
          onClick={(e) => createAdmin(e)}
        >Create Admin</button>
      </p>

      {/* Delete User Account */}
      <div className={`prompt ${deleteConfirm ? 'disable' : ''}`}>
        <div>
          <h3>Delete Account</h3>
          <p className="errMsg">{userDetails.username || 'No Account'}</p>
          <p>This action is permanent!<br/> Are you sure?</p>
          <button
            type="button"
            onClick={(e) => deleteAccount(e)}
          >Delete</button>
          <button
            type="button"
            onClick={() => setDeleteConfirm(true)}
          >Cancel</button>
        </div>
      </div>
      <p><span>Delete Account: </span>{userDetails.username || 'No Info'}
        <button
          type="button"
          onClick={() => setDeleteConfirm(false)}
          >Delete Account</button>
      </p>

      <p className="errMsg">{editMsg}</p>
    </div>
  )
}

export default AdminChange