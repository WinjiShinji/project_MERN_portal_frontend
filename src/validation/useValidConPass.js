import { useContext, useEffect, useState } from "react"
import SiteContext from "../context/SiteContext"


const useValidConPass = (input, compare) => {
  const { dispatch } = useContext(SiteContext)
  const [isValid, setIsValid] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (input === '' || null || undefined) {
      setMsg('')
      setIsValid(false)
    } else if (input !== compare) {
      setMsg('Passwords do not match.')
      setIsValid(false)
    } else if (input === compare) {
      setMsg('')
      setIsValid(true)
    } else {
      setMsg('Invalid')
      setIsValid(false)
    }
    
    dispatch({ type: 'formConPassMsg', payload: msg})

  },[input, msg, dispatch, compare])

  return isValid
}

export default useValidConPass 