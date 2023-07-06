import React from 'react'
import PropTypes from 'prop-types'

function PageTitle(props) {
  const { title, bgColor, borderColor } = props
  return (
    <div
      className={`w-full ${bgColor} text-gray-600 border-l-4 ${borderColor} mb-2 md:mb-4 lg:mb-6 py-4`}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl pl-2">{title}</h1>
    </div>
  )
}

PageTitle.defaultProps = {
  title: 'Users',
  bgColor: 'bg-blue-50',
  borderColor: 'bg-blue-600',
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
}

export default PageTitle
