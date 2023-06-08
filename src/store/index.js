import { configureStore } from '@reduxjs/toolkit'
import reducer from 'store/reducer'
import logger from 'redux-logger'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
