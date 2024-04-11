import { useContext, useState } from "react"
import useDeleteUser from "../api/useDeleteUser"
import SiteContext from "../context/SiteContext"

const AccountDelete = () => {
  const { state } = useContext(SiteContext)
  const [password, setPassword] = useState('')
  const [deleteBtn, setDeleteBtn] = useState(false)
  const [confirmBtn, setConfirmBtn] = useState(true)

  // Hooks //
  const deleteAccount = useDeleteUser(state.userInfo._id, password)

  // Validation //

  // Events //
  const handleEdit = (e) => {
    e.preventDefault()
    setDeleteBtn(true)
    setConfirmBtn(false)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setDeleteBtn(false)
    setConfirmBtn(true)
    try {
      deleteAccount()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={(e) => handleDelete(e)}>
      <h2>Delete Account</h2>
      <label htmlFor="password">Confirm Password</label>
      <input 
        id="password"
        type="password"
        placeholder="Enter password..." 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={deleteBtn === false ? true : false }
      />
      <p className="errInput">{state.deleteMsg}</p>
      <button
        className={confirmBtn === true ? 'show' : 'hide'}
        type="button"
        onClick={(e) => handleEdit(e)}
        disabled={deleteBtn === true ? true : false}
      >Delete
      </button>
      <button
        className={confirmBtn === false ? 'show' : 'hide'}
        type="button"
        onClick={(e) => handleDelete(e)}
      >Confirm</button>
    </form>
  )
}

export default AccountDelete