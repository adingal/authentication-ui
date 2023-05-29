import React from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateUserDetails as validate } from 'utils/validate'
import CustomInput from 'atoms/CustomInput'
import CustomButton from 'atoms/CustomButton'

function UserDetails() {
  const params = useParams()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '1',
      active: true,
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 md:mb-5">
          User Details
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            inputClass="bg-user-icon"
            hasError={formik.errors.name !== false}
            errorText={formik.errors.name}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
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
          <div className="relative mb-5 lg:mb-6">
            <select
              id="role"
              name="role"
              defaultValue="0"
              className={`bg-role-icon bg-no-repeat bg-25 md:bg-30 bg-left-center w-full shadow-md px-10 lg:px-11 py-3 lg:py-4 rounded-md cursor-pointer focus-visible:outline-gray-300`}
              onChange={formik.handleChange}
            >
              <option value="0" disabled>
                Role
              </option>
              <option value="1">User</option>
              <option value="2">Admin</option>
            </select>
          </div>
          <CustomInput
            id="lastIn"
            type="text"
            name="lastIn"
            placeholder="Last logged in"
            inputClass="bg-login-icon text-gray-400"
            value={new Date().toLocaleString()}
            isDisabled={true}
          />
          <div className="relative mb-5 lg:mb-6 px-3 text-right">
            <label htmlFor="active" className="cursor-pointer">
              Active
            </label>
            <input
              id="active"
              name="active"
              type="checkbox"
              className="ml-2 cursor-pointer"
              onChange={formik.handleChange}
              checked={formik.values.active}
            />
          </div>
          <CustomButton type="submit" buttonText="Login" />
        </form>
      </div>
    </div>
  )
}

export default UserDetails
