import React from 'react'
import CustomInput from 'atoms/CustomInput'
import userCircleIcon from 'assets/images/userCircleIcon.svg'

function Login() {
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
        <form>
          <CustomInput
            id="email"
            type="email"
            placeholder="Email"
            bgIconClass="bg-user-icon"
            hasError={!true}
          />
          <CustomInput
            id="password"
            type="password"
            placeholder="Password"
            bgIconClass="bg-lock-icon"
            hasError={!true}
          />
          <div>
            <button
              className="w-full bg-gray-400 hover:bg-gray-600 transition-colors shadow-md px-10 lg:px-11 py-2 lg:py-3 rounded-md text-lg md:text-xl lg:text-2xl text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
