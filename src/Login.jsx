import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Login() {
  const [email, setEmail] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login(email)
    navigate('/dashboard')
  }

  return (
    <div className='login-box'>
      <h2>Login</h2>

      <input
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
