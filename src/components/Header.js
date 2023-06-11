import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, NavLink } from 'react-router-dom'
import logo from 'assets/images/logo-nobg.png'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from 'store/login/loginSlice'
import { clearState } from 'store/users/usersSlice'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser)
  const currentPathClass = location.pathname === '/' ? 'hidden' : 'block'
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (currentUser && currentUser?.token) {
      setIsLoggedIn(true)
    }
  }, [currentUser])

  const onLogoutClick = () => {
    dispatch(logOut())
    dispatch(clearState())
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className={`${currentPathClass} bg-gray-100`}>
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between p-4">
        {/* Logo */}
        <div>
          <NavLink to="/users">
            <img
              className="max-w-[150px] sm:max-w-full"
              src={logo}
              alt="Logo"
            />
          </NavLink>
        </div>
        {/* Nav */}
        <nav>
          <ul className="flex flex-row space-x-4 sm:space-x-6">
            <li>
              <NavLink
                to="/users"
                className="text-base sm:text-lg hover:underline"
              >
                Users
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <button
                  type="button"
                  className="text-base sm:text-lg hover:underline"
                  onClick={onLogoutClick}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
