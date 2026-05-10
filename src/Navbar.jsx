import { useTheme } from './ThemeContext'

function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <div className='navbar'>
      <h2>GlobeTrek</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Navbar