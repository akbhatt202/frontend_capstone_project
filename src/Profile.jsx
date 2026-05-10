import { useAuth } from './AuthContext'

function Profile() {
  const { user, logout } = useAuth()

  return (
    <div className='card'>
      <h2>User Profile</h2>
      <p>Email: {user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile