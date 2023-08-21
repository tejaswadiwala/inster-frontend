import { useState } from 'react'
import InsterController from '../controllers/inster/InsterController'
import { AxiosResponse } from 'axios'
import '../css/Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const insterController: InsterController = new InsterController('123')
      const apiResponse: AxiosResponse = await insterController.login({
        username: username,
        password: password,
      })
      const token = apiResponse.data.data.token
      localStorage.setItem('authToken', token)
      window.location.href = '/dashboard'
    } catch (error) {
      setErrorMessage('Invalid credentials')
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
