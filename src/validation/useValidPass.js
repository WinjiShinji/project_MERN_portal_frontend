import { useContext, useEffect, useState } from "react"
import SiteContext from "../context/SiteContext"

const useValidPass = (input) => {
  const { dispatch } = useContext(SiteContext)
  const [isValid, setIsValid] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const passRegEx = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])([\w@#-_=+!£$%^&*]{8,255})$/)
    const passValid = passRegEx.test(input.toString())

    if (input === ''|| null || undefined) {
      setMsg('')
      setIsValid(false)
    } else if (input.length <= 7) {
      setMsg('Minimum of 8 characters.')
      setIsValid(false)
    } else if (passValid !== true) {
      setMsg('Invalid character.')
      setIsValid(false)
    } else if (passValid === true) {
      setMsg('')
      setIsValid(true)
    } else {
      setMsg('Invalid')
      setIsValid(false)
    }

    dispatch({ type: 'formPassMsg', payload: msg })

  },[input, dispatch, msg])

  return isValid
}

export default useValidPass