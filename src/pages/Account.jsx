import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import { Link, useParams } from "react-router-dom"
import UserAccount from "../components/UserAccount"

const Account = () => {
  const { state, dispatch } = useContext(SiteContext)
  const { id: userId } = useParams()

  // Not Logged In //
  if (!state.isLoggedIn === true) {
    return (
      <main>
        <div className="goto">
          <h1>Not logged in </h1>
          <Link 
            to={'/'}
            onClick={() => {
              dispatch({ type: 'formType', payload: 'login' })
            }}
          >Click to Login</Link>
        </div>
      </main>
    )
  }

  // Logged In //
  if (state.isLoggedIn === true) {
    return (
      <>
        <UserAccount userId={userId} />
      </>
    )
  }
}

export default Account