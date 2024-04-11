import { createContext, useEffect, useReducer } from "react";
import siteReducer from "./siteReducer";

const SiteContext = createContext({})

// @TODO: aggregate states into objects 

export const SiteProvider = ({ children }) => {
  // Initial Reducer State //
  const [state, dispatch] = useReducer(siteReducer, {
    // User Default State //
    isLoggedIn: false,
    isRegistered: false,
    userInfo: {},
    admin: false,
    
    // Form Default State //
    formUsername: '',
    formPassword: '',
    formConPass: '',    
    formRegister: {},
    formMsg: '',
    formUserMsg: '',
    formPassMsg: '',
    formConPassMsg: '',
    formType: 'login',
    formPassType: 'password',
    deleteMsg: '',
    regSubBtn: 'disabled'
  })

  // Check Session Token //
  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      dispatch({ type: 'isLoggedIn', payload: true })
    }
  },[])

  // Logic //
  useEffect(() => {
    const roles = state.userInfo.roles || {}
    if (Object.hasOwn(roles, 'Admin')) {
      dispatch({ type: 'admin', payload: true })
    }
  },[state.userInfo])

  return (
    <SiteContext.Provider value={{
      state, dispatch,
    }}>
      { children }
    </SiteContext.Provider>
  )
}

export default SiteContext