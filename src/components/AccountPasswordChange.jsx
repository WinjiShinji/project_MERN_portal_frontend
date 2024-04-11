import { useContext, useState } from "react"
import useValidPass from '../validation/useValidPass'
import useValidConPass from "../validation/useValidConPass"
import SiteContext from "../context/SiteContext"
import useChangePass from "../api/useChangePass"

const AccountPasswordChange = () => {
  // States //
  const { state, dispatch } = useContext(SiteContext)
  const [inputOldPass, setInputOldPass] = useState('')
  const [inputNewPass, setInputNewPass] = useState('')
  const [inputConPass, setInputConPass] = useState('')
  const [editBtn, setEditBtn] = useState(false)
  const [changeBtn, setChangeBtn] = useState(true)

  // Hooks //
  const changePass = useChangePass(state.userInfo._id, inputOldPass, inputNewPass)

  // Validation //
  const validNewPass = useValidPass(inputNewPass)
  const validConPass = useValidConPass(inputConPass, inputNewPass)

  // Events //
  const handleChange = (e) => {
    e.preventDefault()
    try {
      changePass()
    } catch (err) {
      console.log(err)
    }
    setEditBtn(false)
    setChangeBtn(true)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch({ type: 'formMessage', payload: ''})
    setEditBtn(true)
    setChangeBtn(false)
  }

  return (
    <form className="change_pass">
      <p className="errMsg">{state.formMessage}</p>
      <h2>Change Password</h2>
      {/* Old Password Input */}
      <label htmlFor="oldPass">Enter Old Password</label>
      <input
        id='oldPass'
        type="password"
        required
        disabled={changeBtn === true ? true : false}
        value={inputOldPass}
        onChange={(e) => setInputOldPass(e.target.value)}
      />
      {/* New Password Input */}
      <label htmlFor="newPass">Create New Password</label>
      <input 
        id="newPass"
        type="password"
        required
        disabled={changeBtn === true ? true : false}
        value={inputNewPass}
        onChange={(e) => setInputNewPass(e.target.value)} 
      />
      <p className='errInput'>
        {state.formPassMsg}
      </p>
      {/* Confirm New Password Input */}
      <label htmlFor="conPass">Confirm New Password</label>
      <input 
        id="conPass"
        type="password"
        required
        disabled={changeBtn === true ? true : false}
        value={inputConPass}
        onChange={(e) => setInputConPass(e.target.value)} 
      />
      <p className='errInput'>
        {state.formConPassMsg}
      </p>
      <button
        className={changeBtn === true ? 'show' : 'hide'}
        type="button"
        onClick={(e) => handleEdit(e)}
        disabled={editBtn === true ? true : false}
      >Edit
      </button>
      <button
        className={changeBtn === false ? 'show' : 'hide'}
        type="button"
        onClick={(e) => handleChange(e)}
        disabled={validNewPass && validConPass ? false : true}
      >change</button>
    </form>
  )
}

export default AccountPasswordChange