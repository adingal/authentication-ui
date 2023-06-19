import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    userId: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true
      state.userId = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.userId = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
