import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'store/login/loginSlice'
import usersReducer from 'store/users/usersSlice'

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
})

export default rootReducer
