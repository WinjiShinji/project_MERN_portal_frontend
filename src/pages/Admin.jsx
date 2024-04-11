import useUserInfo from "../api/useUserInfo"
import AdminChange from "../components/AdminChange"
import AdminDetails from "../components/AdminDetails"
import AdminSearch from "../components/AdminSearch"

const Admin = () => {
  // Fetch Admin Data //
  useUserInfo()

  return (
    <section className="admin">
      <AdminSearch />
      <AdminDetails />
      <AdminChange />
    </section>
  )
}

export default Admin