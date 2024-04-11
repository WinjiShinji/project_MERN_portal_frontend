import { useContext } from "react"
import SiteContext from "../context/SiteContext"
import useValidUser from '../validation/useValidUser'
import useValidPass from '../validation/useValidPass'
import useValidConPass from '../validation/useValidConPass'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash} from 'react-icons/fa6'
import useRegister from "../api/useRegister"

const FormRegister = () => {
  const { state, dispatch } = useContext(SiteContext)
  const handleRegister = useRegister()

  const handlePassType = () => {
    state.formPassType === 'password' 
      ? dispatch({ type: 'formPassType', payload: 'text' })
      : dispatch({ type: 'formPassType', payload: 'password' })
  }

  // Validation //
  const validUser = useValidUser(state.formUsername)
  const validPass = useValidPass(state.formPassword)
  const validConPass = useValidConPass(state.formConPass, state.formPassword)

  return (
    <form 
      className="form_register"
      onSubmit={(e) => {
        e.preventDefault()
        handleRegister()
      }}
    >
      <h2>Register</h2>
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
        <span onClick={() => handlePassType()}>{state.formPassType === 'text' ? <FaEye /> : <FaEyeSlash />}</span>
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

      {/* Password Confirm */}
      <label htmlFor="passwordConfirm">Confirm Password:
        <span onClick={() => handlePassType()}>{state.formPassType === 'text' ? <FaEye /> : <FaEyeSlash />}</span>
      </label>
      <input 
        id="passwordConfirm"
        type={state.formPassType}
        placeholder="Confirm password..."
        required
        autoComplete="none"
        value={state.formConPass}
        onChange={(e) => {
          dispatch({ type: 'formConPass', payload: e.target.value })
        }}
      />
      <p className='errInput'>
        {state.formConPassMsg}
      </p>

      <button
        type="submit"
        disabled={validUser && validPass && validConPass ? '' : 'disabled'}
        >
          Register
      </button>
      <button
        type='button' 
        className="form_type"
        onClick={(e) => {
          e.preventDefault()
          dispatch({ type: 'formType', payload: 'login' })
        }}
      >Login
      </button>
    </form>
  )
}

export default FormRegister