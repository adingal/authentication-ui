import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'store/login/loginSlice'
import usersReducer from 'store/users/usersSlice'
import modalReducer from 'store/modal/modalSlice'

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
  modal: modalReducer,
})

export default rootReducer
