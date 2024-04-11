import { useContext, useEffect, useState } from "react"
import SiteContext from "../context/SiteContext"

const useValidUser = (input) => {
  const { dispatch } = useContext(SiteContext)
  const [isValid, setIsValid] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const userRegEx = new RegExp(/^([\w@#-_=+!£$%^&*]{8,255})$/) 
    const userValid = userRegEx.test(input.toString())
    if (input === '' || null || undefined) {
      setMsg('')
      setIsValid(false)
    } else if (input.length <= 7) {
      setMsg('Minimum of 8 characters.')
      setIsValid(false)
    } else if (userValid !== true) {
      setMsg('Invalid character.')
      setIsValid(false)
    } else if (userValid === true) {
      setMsg('')
      setIsValid(true)
    } else {
      setMsg('Invalid')
      setIsValid(false)
    }
    
    dispatch({ type: 'formUserMsg', payload: msg})
    
  },[input, dispatch, msg])

  return isValid
}

export default useValidUser