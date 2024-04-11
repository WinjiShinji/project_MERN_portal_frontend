import { useContext, useState } from "react"
import useAdminId from "../api/admin/useAdminId"
import useAdminUser from "../api/admin/useAdminUser"
import AdminContext from "../context/AdminContext"

const AdminSearch = () => {
  // State //
  const { 
    setUserDetails, 
    adminMsg, setAdminMsg,
    setEditMsg
  } = useContext(AdminContext)
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const userSearchById = useAdminId(userId)
  const userSearchByUser = useAdminUser(username)

  // Events //
  const searchById = (e) => {
    e.preventDefault()
    userSearchById()
  }
  const searchByName = (e) => {
    e.preventDefault()
    userSearchByUser()
  }
  const clearDetails = (e) => {
    e.preventDefault()
    // Clear States //
    try {
      setUserId('')
      setUsername('')
      setUserDetails({})
      setEditMsg('')
      setAdminMsg('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="admin_search">
      <h2>User Search</h2>
      {/* Search by ID */}
      <form onSubmit={(e) => searchById(e)}>
        <label htmlFor="userId">Search by ID:</label>
        <input 
          id="userId"
          type="text" 
          placeholder="UserId..."
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Search by username */}
      <form onSubmit={(e) => searchByName(e)}>
        <label htmlFor="username">Search by Username:</label>
        <input
          id="username" 
          type="text" 
          placeholder="Username..."
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button
        type="button"
        onClick={(e) => clearDetails(e)}
      >Clear Search</button>
      <p className="errMsg">{adminMsg}</p>
    </div>
  )
}

export default AdminSearch