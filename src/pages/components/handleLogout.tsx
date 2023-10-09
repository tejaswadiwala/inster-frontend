import { NavigateFunction } from 'react-router-dom'

const handleLogout = (navigate: NavigateFunction) => {
  localStorage.removeItem('authToken')
  navigate('/login')
}

export default handleLogout
