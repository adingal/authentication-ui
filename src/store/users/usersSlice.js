import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from 'api'

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'api/fetchUsers',
  async (token, { rejectWithValue }) => {
    auth.defaults.headers.common = { Authorization: `Bearer ${token}` }

    try {
      const response = await auth.get('/api/v1/users')
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    updatedUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearState: (state) => {
      state.userList = []
      state.updatedUser = null
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all users
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { data } = action.payload
        state.isLoading = false
        state.userList = data.users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { clearState } = usersSlice.actions

export default usersSlice.reducer
