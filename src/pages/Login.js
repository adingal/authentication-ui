import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateLogin as validate } from 'utils/validate'
import CustomInput from 'atoms/CustomInput'
import CustomButton from 'atoms/CustomButton'
import userCircleIcon from 'assets/images/userCircleIcon.svg'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from 'store/login/loginSlice'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser)
  const error = useSelector((state) => state.login.error)
  const [errorMessage, setErrorMessage] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(loginUser(values))
    },
  })

  useEffect(() => {
    if (currentUser && currentUser?.token) {
      localStorage.setItem('token', currentUser.token)
      navigate('/users')
    }
  }, [currentUser])

  useEffect(() => {
    if (error && error?.message) {
      setErrorMessage(error.message)
    }
  }, [error])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-darkness px-4">
      <div className="w-full min-w-[320px] max-w-sm relative bg-gray-300 p-6 md:p-8 lg:p-12 rounded-lg">
        <img
          className="h-32 w-32 absolute -top-16 right-1/2 translate-x-1/2 bg-gray-400 rounded-full"
          src={userCircleIcon}
          alt="User icon"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium text-gray-600 tracking-wide mt-12 lg:mt-10 mb-4 md:mb-5 lg:mb-6">
          Login
        </h1>
        <form onSubmit={formik.handleSubmit} className="relative">
          <CustomInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            inputClass="bg-mail-icon"
            hasError={formik.errors.email !== false}
            errorText={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <CustomInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            inputClass="bg-lock-icon"
            hasError={formik.errors.password !== false}
            errorText={formik.errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <CustomButton type="submit" buttonText="Login" />
          {errorMessage !== '' && (
            <span className="w-full block absolute text-xs text-center text-red-600 tracking-wide py-2">
              {errorMessage}
            </span>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
