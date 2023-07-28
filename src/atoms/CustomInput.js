import React from 'react'
import PropTypes from 'prop-types'

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

CustomInput.defaultProps = {
  id: 'sampleId',
  type: 'text',
  placeholder: 'Enter placeholder here',
  value: 'Enter value here',
  hasError: false,
  errorText: '',
  inputClass: 'sampleClass',
  onChange: () => {},
  isDisabled: false,
}

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
}

export default CustomInput
