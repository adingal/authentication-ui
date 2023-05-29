import React from 'react'
import { useFormik } from 'formik'
import validate from 'utils/validate'
import CustomInput from 'atoms/CustomInput'
import CustomButton from 'atoms/CustomButton'
import userCircleIcon from 'assets/images/userCircleIcon.svg'

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })

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
        <form onSubmit={formik.handleSubmit}>
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
        </form>
      </div>
    </div>
  )
}

export default Login
