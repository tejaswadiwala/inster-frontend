import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; 2023 Inster. All rights reserved.{' '}
        <Link className="footer-link" to="/privacy-policy">
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

export default Footer
