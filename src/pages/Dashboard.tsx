import '../css/Dashboard.css'
import { useNavigate } from 'react-router-dom'
import handleLogout from './functions/handleLogout'

function Dashboard() {
  const navigate = useNavigate()

  const handleGeneratePost = () => {
    console.log('Generating a new post...')
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <p>Welcome to the dashboard! You are logged in.</p>
        <button
          className="dashboard-generate-button"
          onClick={handleGeneratePost}
        >
          Generate Post
        </button>
      </div>
      <button
        className="dashboard-logout-button"
        onClick={() => handleLogout(navigate)}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
