import React from 'react'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const currentPathClass = location.pathname === '/' ? 'hidden' : 'block'

  return (
    <footer
      className={`${currentPathClass} bg-gray-100 fixed bottom-0 left-0 right-0`}
    >
      <div className="max-w-7xl mx-auto p-4">
        <p className="text-sm md:text-base text-gray-500">
          {new Date().getFullYear()} &copy; adingal
        </p>
      </div>
    </footer>
  )
}

export default Footer
