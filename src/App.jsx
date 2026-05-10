import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from './Home'
import Explore from './Explore'
import Planner from './Planner'
import Dashboard from './Dashboard'
import Weather from './Weather'
import Login from './Login'
import Profile from './Profile'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <div className='layout'>
      <Sidebar />

      <div className='main-content'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='/planner'
            element={
              <ProtectedRoute>
                <Planner />
              </ProtectedRoute>
            }
          />

          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App