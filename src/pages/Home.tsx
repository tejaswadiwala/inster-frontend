import '../css/Home.css'
import insterLogo from '../assets/insterLogo.png'

function Home() {
  return (
    <div className="home-container">
      <img
        src={insterLogo}
        alt="Inster Logo"
        className="inster-logo" // Add a class for styling if needed
      />
    </div>
  )
}

export default Home
