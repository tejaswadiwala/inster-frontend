import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

function App() {
  const authToken = localStorage.getItem('authToken')
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={authToken ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
