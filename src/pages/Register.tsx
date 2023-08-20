import { useState } from 'react'
import InsterController from '../controllers/inster/InsterController'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [registrationStatus, setRegistrationStatus] = useState('')

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const insterController: InsterController = new InsterController('123')
    const apiResponse = await insterController.register({
      username: username,
      password: password,
      email: email,
    })

    if (apiResponse.status === 200) {
      setRegistrationStatus('success') // Update registration status
      setTimeout(() => {
        setRegistrationStatus('')
        window.location.href = '/login' // Redirect using window.location
      }, 3000)
    } else {
      setRegistrationStatus('error')
    }
  }
  return (
    <div>
      <h2>Register</h2>
      {registrationStatus === 'success' && (
        <p>Registration successful! Redirecting to login...</p>
      )}
      {registrationStatus === 'error' && (
        <p>Registration failed. Please try again.</p>
      )}
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
