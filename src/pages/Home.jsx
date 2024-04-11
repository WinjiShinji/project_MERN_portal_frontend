import { useContext } from 'react'
import FormPortal from '../components/FormPortal'
import SiteContext from '../context/SiteContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { state, dispatch } = useContext(SiteContext)

  if (state.isRegistered === true) return (
    <main>
      <div className='goto'>
        <h1>Registered Successfully</h1>
        <Link to={'/'}
          onClick={() => {
            dispatch({ type: 'isRegistered', payload: false })
            dispatch({ type: 'formType', payload: 'login' })
          }
        }>Go to login</Link>
      </div>
    </main>
  )

  if (!state.isLoggedIn === true) return (
    <main>
      <FormPortal />
    </main>
  )

  if (state.isLoggedIn === true) return (
    <main>
      <div className="goto">
          <h1>Login Successful</h1>
          <Link to={'/account'}>Go to account</Link>
        </div>
    </main>
  )
}

export default Home