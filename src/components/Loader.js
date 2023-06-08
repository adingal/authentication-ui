import React from 'react'

// Redux
import { useSelector } from 'react-redux'

function Loader() {
  const isLoading = useSelector((state) => state.login.isLoading)

  if (!isLoading) return

  return (
    <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center bg-[rgba(0,0,0,0.75)]">
      <span className="loader"></span>
    </div>
  )
}

export default Loader
