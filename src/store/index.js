import { configureStore } from '@reduxjs/toolkit'
import reducer from 'store/reducer'
import logger from 'redux-logger'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    // Run logger only on development
    if (process.env.REACT_APP_NODE_ENV === 'development') {
      return getDefaultMiddleware().concat(logger)
    }
    return getDefaultMiddleware()
  },
})
