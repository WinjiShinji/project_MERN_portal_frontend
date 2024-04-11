import { createContext, useState } from "react";

const AdminContext = createContext({})

export const AdminProvider = ({ children }) => {
  // State //
  const [userDetails, setUserDetails] = useState({})
  const [adminMsg, setAdminMsg] = useState('')
  const [editMsg, setEditMsg] = useState('')

 return (
  <AdminContext.Provider value={{
    userDetails, setUserDetails,
    adminMsg, setAdminMsg,
    editMsg, setEditMsg,
  }}>
    { children }
  </AdminContext.Provider>
 )
}

export default AdminContext