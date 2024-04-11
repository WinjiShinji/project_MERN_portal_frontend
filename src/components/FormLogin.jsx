import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa6"
import useValidUser from "../validation/useValidUser"
import useValidPass from "../validation/useValidPass"
import useLogin from "../api/useLogin"

const FormLogin = () => {
  const { state, dispatch } = useContext(SiteContext)
  const handleLogin = useLogin()

  const handlePassType = () => {
    state.formPassType === 'password' 
      ? dispatch({ type: 'formPassType', payload: 'text' })
      : dispatch({ type: 'formPassType', payload: 'password' })
  }

  // Validation //
  const validUser = useValidUser(state.formUsername)
  const validPass = useValidPass(state.formPassword)

  return (
    <form 
      className="form_login"
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <h2>Login</h2>
      <p className="errMsg">{state.formMessage}</p>

      {/* Username */}
      <label htmlFor="username">Username:</label>
      <input
        id="username" 
        type="text" 
        placeholder="Enter a username..."
        required
        autoComplete="none"
        value={state.formUsername}
        onChange={(e) => {
          dispatch({ type: 'formUsername', payload: e.target.value })
        }}
      />
      <p className='errInput'>
        {state.formUserMsg}
      </p>

      {/* Password Initial */}
      <label htmlFor="password">Password: 
        <span onClick={() => handlePassType()}>
          {state.formPassType === 'text' ? <FaEye /> : <FaEyeSlash />}
        </span>
      </label>
      <input 
        id="password"
        type={state.formPassType} 
        placeholder="Enter a password..."
        required
        autoComplete="none"
        value={state.formPassword}
        onChange={(e) => {
          dispatch({ type: 'formPassword', payload: e.target.value })
        }}
      />
      <p className='errInput'>
        {state.formPassMsg}
      </p>

      <button
        type="submit"
        disabled={validUser && validPass ? '' : 'disabled'}
        >
          Login
      </button>
      <button
        type="button"
        className="form_type"
        onClick={(e) => {
          e.preventDefault()
          dispatch({ type: 'formType', payload: 'register' })
        }}
      >Register
      </button>
    </form>
  )

}

export default FormLogin