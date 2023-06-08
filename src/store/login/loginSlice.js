import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const auth = axios.create({
  baseURL: process.env.REACT_APP_AUTHENTICATION_URL,
})

// Login user
export const loginUser = createAsyncThunk(
  'api/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await auth.post('/api/v1/users/login', data)
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.currentUser = null
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, token } = action.payload
        state.isLoading = false
        state.currentUser = { ...data, token }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { logOut } = loginSlice.actions

export default loginSlice.reducer
