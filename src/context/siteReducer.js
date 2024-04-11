// Site Reducer Logic //
const siteReducer = (state, action) => {
  switch (action.type) {
    // User State //
    case 'isLoggedIn':
      return {
        ...state,
        isLoggedIn: action.payload
      }
    case 'isRegistered':
      return {
        ...state,
        isRegistered: action.payload
      }
    case 'userInfo':
      return {
        ...state,
        userInfo: action.payload
      }
    case 'admin':
      return {
        ...state,
        admin: action.payload
      }

    // Form State //
    case 'formUsername':
      return {
        ...state,
        formUsername: action.payload
      }
    case 'formPassword':
      return {
        ...state,
        formPassword: action.payload
      }
    case 'formConPass':
      return {
        ...state,
        formConPass: action.payload
      }
    case 'formRegister':
      return {
        ...state,
        formRegister: action.payload
      }
    case 'formMsg':
      return {
        ...state,
        formMessage: action.payload
      }
    case 'formUserMsg':
      return {
        ...state,
        formUserMsg: action.payload
      }
    case 'formPassMsg':
      return {
        ...state,
        formPassMsg: action.payload
      }
    case 'formConPassMsg':
      return {
        ...state,
        formConPassMsg: action.payload
      }
    case 'formType':
      return {
        ...state,
        formType: action.payload
      }
    case 'formPassType':
      return {
        ...state,
        formPassType: action.payload
      }
    case 'deleteMsg':
      return {
        ...state,
        deleteMsg: action.payload
      }
    case 'regSubBtn':
      return {
        ...state,
        regSubBtn: action.payload
      }

    default:
      return state
  }
}

export default siteReducer