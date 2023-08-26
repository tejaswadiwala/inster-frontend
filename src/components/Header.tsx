import { Link, useNavigate } from 'react-router-dom'
import '../css/Header.css'
import handleLogout from '../pages/functions/handleLogout'

function Header() {
  const navigate = useNavigate()
  const authToken = localStorage.getItem('authToken')

  return (
    <div className="header">
      <nav>
        <Link className="header-link" to="/">
          Home
        </Link>
        {authToken ? (
          <>
            <Link className="header-link" to="/dashboard">
              Dashboard
            </Link>
            <Link
              className="header-link"
              onClick={() => handleLogout(navigate)}
              to="/"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link className="header-link" to="/login">
              Login
            </Link>
            <Link className="header-link" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Header
