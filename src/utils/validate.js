export const validateLogin = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more.'
  }

  return errors
}

export const validateUserDetails = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Name is required.'
  } else if (/^[a-zA-Z]{4,}(?:[a-zA-Z]+){0,2}$/.test(values.name)) {
    errors.name = 'Must be 5 characters or more.'
  }

  if (!values.email) {
    errors.email = 'Email is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }

  return errors
}
