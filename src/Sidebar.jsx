import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>GlobeTrek</h1>

      <Link to='/'>Home</Link>
      <Link to='/explore'>Explore</Link>
      <Link to='/weather'>Weather</Link>
      <Link to='/planner'>Planner</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Sidebar