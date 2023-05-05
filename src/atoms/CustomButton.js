import React from 'react'

function CustomButton(props) {
  const { type, buttonText } = props
  return (
    <button
      className="w-full bg-gray-400 hover:bg-gray-600 transition-colors shadow-md px-10 lg:px-11 py-2 lg:py-3 rounded-md text-lg md:text-xl lg:text-2xl text-white"
      type={type}
    >
      {buttonText}
    </button>
  )
}

export default CustomButton
