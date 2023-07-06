import React from 'react'
import PropTypes from 'prop-types'

function CustomButton(props) {
  const { type, buttonText, bgColor, bgHoverColor } = props
  return (
    <button
      className={`w-full ${bgColor} hover:${bgHoverColor} transition-colors shadow-md px-10 lg:px-11 py-2 lg:py-3 rounded-md text-lg md:text-xl lg:text-2xl text-white`}
      type={type}
    >
      {buttonText}
    </button>
  )
}

CustomButton.defaultProps = {
  type: 'button',
  buttonText: 'Add User',
  bgColor: 'bg-gray-400',
  bgHoverColor: 'bg-gray-600',
}

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  bgHoverColor: PropTypes.string.isRequired,
}

export default CustomButton
