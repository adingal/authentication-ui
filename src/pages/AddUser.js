import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateAddUser as validate } from 'utils/validate'
import CustomInput from 'atoms/CustomInput'
import CustomButton from 'atoms/CustomButton'
import PageTitle from 'atoms/PageTitle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from 'store/users/usersSlice'

function AddUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser)
  const roles = ['role', 'user', 'admin']

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      role: 'user',
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      await dispatch(addUser(values))
      navigate('/users')
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

  const renderSelectOption = () =>
    roles.map((role, index) => (
      <option value={role} disabled={role === 'role'} key={`${role}-${index}`}>
        {role}
      </option>
    ))

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-md mx-auto">
        <PageTitle
          title="Add User"
          bgColor="bg-green-50"
          borderColor="border-green-600"
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
          <div className="flex flex-row space-x-2">
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
            <CustomInput
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              inputClass="bg-lock-icon"
              hasError={formik.errors.passwordConfirm !== false}
              errorText={formik.errors.passwordConfirm}
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
          </div>
          <div className="relative mb-5 lg:mb-6">
            <select
              id="role"
              name="role"
              className={`bg-role-icon bg-no-repeat bg-25 md:bg-30 bg-left-center w-full shadow-md px-10 lg:px-11 py-3 lg:py-4 rounded-md cursor-pointer focus-visible:outline-gray-300 capitalize`}
              onChange={formik.handleChange}
              value={formik.values.role}
            >
              {renderSelectOption()}
            </select>
          </div>
          <CustomButton type="submit" buttonText="Add" />
          {formik.errors.formValues && (
            <span className="w-full block absolute text-xs text-center text-red-600 tracking-wide py-2">
              {formik.errors.formValues}
            </span>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddUser
