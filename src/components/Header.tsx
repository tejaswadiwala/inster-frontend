import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
  return (
    <div className="header">
      <nav>
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/login">
          Login
        </Link>
        <Link className="header-link" to="/register">
          Register
        </Link>
      </nav>
    </div>
  )
}

export default Header
