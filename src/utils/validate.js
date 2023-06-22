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

export const validateAddUser = (values) => {
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

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more.'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Confirm password is required.'
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Password is not the same.'
    errors.password = 'Password is not the same.'
  }

  return errors
}

export const compareObjectValues = (x, y) => {
  if (x === y) return true
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue
    // other properties were tested using x.constructor === y.constructor

    if (!y.hasOwnProperty(p)) return false
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== 'object') return false
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!compareObjectValues(x[p], y[p])) return false
    // Objects and Arrays must be tested recursively
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false
  // allows x[ p ] to be set to undefined

  return true
}
