import axios from "../utility/axiosConfig"

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      await axios
        .get('/refresh')
        .then(function(res) {
          if (res.data.accessToken) {
            // Save token to storage //
            const accessToken = `Bearer ${res.data.accessToken}`
            sessionStorage.setItem('accessToken', accessToken)
            console.log('Updated accessToken')
            
            return res.data.accessToken
          }
          return res
        })
        .catch(function(err) {
          console.error('Failed to save accessToken to sessionStorage')
          console.error(err)
        })
    } catch (err) {
      console.error(err)
    }
    }
    
  return refresh
}

export default useRefreshToken