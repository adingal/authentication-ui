import React from 'react'

function CustomInput(props) {
  const {
    id,
    type,
    placeholder,
    value,
    hasError,
    errorText,
    bgIconClass,
    onChange,
  } = props

  return (
    <div className="relative mb-5 lg:mb-6">
      <input
        id={id}
        className={`${bgIconClass} bg-no-repeat bg-25 md:bg-30 bg-left-center w-full shadow-md px-10 lg:px-11 py-3 lg:py-4 rounded-md focus-visible:outline-gray-300`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} className="hidden">
        {placeholder}
      </label>
      <span
        className={`${
          hasError ? 'block' : 'hidden'
        } absolute -bottom-4 left-0 text-xs text-red-600 tracking-wide`}
      >
        {errorText}
      </span>
    </div>
  )
}

export default CustomInput
