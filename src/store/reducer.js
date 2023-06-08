import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'store/login/loginSlice'

const rootReducer = combineReducers({
  login: loginReducer,
})

export default rootReducer
