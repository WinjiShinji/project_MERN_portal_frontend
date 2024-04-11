import { useContext } from "react"
import FormRegister from "./FormRegister"
import FormLogin from "./FormLogin"
import SiteContext from "../context/SiteContext"

const FormPortal = () => {
  const { state } = useContext(SiteContext)
  return (
    <>
      {state.formType === 'register' 
        ? <FormRegister /> 
        : state.formType === 'login' 
        ? <FormLogin /> 
        : ''}
    </>
  )
}

export default FormPortal