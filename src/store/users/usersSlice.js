import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from 'api'

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'api/fetchUsers',
  async ({ rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') ?? null

      if (token) {
        auth.defaults.headers.common = { Authorization: `Bearer ${token}` }
      }

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

// Fetch single user
export const fetchUser = createAsyncThunk(
  'api/fetchUser',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') ?? null

      if (token) {
        auth.defaults.headers.common = { Authorization: `Bearer ${token}` }
      }

      const response = await auth.get(`/api/v1/users/${id}`)
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

// Add user
export const addUser = createAsyncThunk(
  'api/addUser',
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') ?? null

      if (token) {
        auth.defaults.headers.common = { Authorization: `Bearer ${token}` }
      }

      const response = await auth.post('/api/v1/users/', data)
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

// Update user
export const updateUser = createAsyncThunk(
  'api/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') ?? null

      if (token) {
        auth.defaults.headers.common = { Authorization: `Bearer ${token}` }
      }

      const response = await auth.patch(
        `/api/v1/users/${data.id}`,
        data.formData
      )
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

// Delete user
export const deleteUser = createAsyncThunk(
  'api/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') ?? null

      if (token) {
        auth.defaults.headers.common = { Authorization: `Bearer ${token}` }
      }

      const response = await auth.delete(`/api/v1/users/${id}`)
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
    newUser: null,
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
      // Fetch single user
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { data } = action.payload
        state.isLoading = false
        state.updatedUser = { ...data.user }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // Add user
      .addCase(addUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.newUser = action.payload
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // Update user
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { data } = action.payload
        state.isLoading = false
        state.updatedUser = { ...data.updatedUser }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // Delete user
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.updatedUser = action.payload
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { clearState } = usersSlice.actions

export default usersSlice.reducer
