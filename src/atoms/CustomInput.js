import React from 'react'

function CustomInput(props) {
  const {
    id,
    type,
    placeholder,
    value,
    hasError,
    errorText,
    inputClass,
    onChange,
    isDisabled,
  } = props

  return (
    <div className="relative mb-5 lg:mb-6">
      <input
        id={id}
        className={`${inputClass} bg-no-repeat bg-25 md:bg-30 bg-left-center w-full shadow-md px-10 lg:px-11 py-3 lg:py-4 rounded-md focus-visible:outline-gray-300`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
        autoComplete="off"
      />
      <label htmlFor={id} className="hidden">
        {placeholder}
      </label>
      {hasError && (
        <span className="block absolute -bottom-4 left-0 text-xs text-red-600 tracking-wide">
          {errorText}
        </span>
      )}
    </div>
  )
}

export default CustomInput
