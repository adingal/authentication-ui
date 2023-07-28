import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import {
  validateUserDetails as validate,
  compareObjectValues,
} from 'utils/validate'
import CustomInput from 'atoms/CustomInput'
import CustomButton from 'atoms/CustomButton'
import PageTitle from 'atoms/PageTitle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, updateUser } from 'store/users/usersSlice'

function EditUser() {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const updatedUser = useSelector((state) => state.users.updatedUser)
  const currentUser = useSelector((state) => state.login.currentUser)
  const [successMessage, setSuccessMessage] = useState('')
  const roles = ['role', 'user', 'admin']

  const formik = useFormik({
    initialValues: {
      name: updatedUser?.name ?? '',
      email: updatedUser?.email ?? '',
      role: updatedUser?.role ?? 'user',
      active: updatedUser?.active ?? true,
    },
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      const initialFormData = compareObjectValues(formik.initialValues, values)

      // If initial form value changes
      if (!initialFormData) {
        const data = { id: params.id, formData: values }
        await dispatch(updateUser(data))
        setSuccessMessage('Update successfull.')
      } else {
        formik.setErrors({ formValues: 'No value have been change.' })
      }
    },
  })

  // If not logged in, redirect back to login page
  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser])

  // If not admin, redirect back to all users page
  useEffect(() => {
    if (currentUser && currentUser?.user?.role !== 'admin') {
      navigate('/users')
    }
  }, [currentUser])

  useEffect(() => {
    // If currently updated user is null, fetch using user id
    if (!updatedUser) {
      dispatch(fetchUser(params.id))
    }
    // If different user - fetch current user data
    if (updatedUser?._id !== params.id) {
      dispatch(fetchUser(params.id))
    }
  }, [updatedUser])

  const renderSelectOption = () =>
    roles.map((role, index) => (
      <option
        value={role}
        disabled={role === 'role'}
        selected={updatedUser?.role === role}
        key={`${role}-${index}`}
      >
        {role}
      </option>
    ))

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-md mx-auto">
        <PageTitle
          title="User Details"
          bgColor="bg-blue-50"
          borderColor="border-blue-600"
        />
        <form onSubmit={formik.handleSubmit} className="relative">
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
              className={`bg-role-icon bg-no-repeat bg-25 md:bg-30 bg-left-center w-full shadow-md px-10 lg:px-11 py-3 lg:py-4 rounded-md cursor-pointer focus-visible:outline-gray-300 capitalize`}
              onChange={formik.handleChange}
              value={formik.values.updatedUser}
            >
              {renderSelectOption()}
            </select>
          </div>
          <CustomInput
            id="lastIn"
            type="text"
            name="lastIn"
            placeholder="Last logged in"
            inputClass="bg-login-icon text-gray-400"
            value={new Date(updatedUser?.lastLoggedIn).toLocaleString()}
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
          <CustomButton
            type="submit"
            buttonText="Update"
            bgColor="bg-blue-400"
            bgHoverColor="bg-blue-600"
          />
          {formik.errors.formValues && (
            <span className="w-full block absolute text-xs text-center text-red-600 tracking-wide py-2">
              {formik.errors.formValues}
            </span>
          )}
          {successMessage !== '' && !formik.errors.formValues && (
            <span className="w-full block absolute text-xs text-center text-green-600 tracking-wide py-2">
              {successMessage}
            </span>
          )}
        </form>
      </div>
    </div>
  )
}

export default EditUser
