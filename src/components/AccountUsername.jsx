import { useContext, useState } from "react"
import SiteContext from "../context/SiteContext"
import useValidUser from "../validation/useValidUser"
import useChangeUsername from "../api/useChangeUsername"

const AccountUsername = () => {
  const { state, dispatch } = useContext(SiteContext)
  const [editBtn, setEditBtn] = useState(false)
  const [changeBtn, setChangeBtn] = useState(true)
  const [username, setUsername] = useState('')

  // Hooks //
  const changeUsername = useChangeUsername(username)

  // Validation //
  const validUsername = useValidUser(username)

  // Events //
  const handleChange = (e) => {
    e.preventDefault()
    dispatch({ type: 'formMessage', payload: ''})
    setEditBtn(false)
    setChangeBtn(true)
    try {
      changeUsername()
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleEdit = (e) => {
    e.preventDefault()
    dispatch({ type: 'formMessage', payload: ''})
    setEditBtn(true)
    setChangeBtn(false)
  }

  return (
    <form onSubmit={(e) => handleChange(e)}>
      <h2>Change Username</h2>
      <label htmlFor="username">Username:</label>
      <input 
        id="username"
        type="text" 
        required
        placeholder={state.userInfo.username || ''}
        disabled={changeBtn === true ? true : false}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="errMsg">{state.formUserMsg}</p>
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
        disabled={validUsername === true ? false : true}
      >change</button>
    </form>    
  )
}

export default AccountUsername