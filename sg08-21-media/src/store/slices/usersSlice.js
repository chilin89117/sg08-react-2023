import {createSlice} from '@reduxjs/toolkit'
import {addUserThunk, deleteUserThunk, fetchUsersThunk} from '../index.js'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    isAdding: false,
    isDeleting: false,
    errorLoading: null,
    errorAdding: null,
    errorDeleting: null
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsersThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.errorLoading = action.error
        state.isLoading = false
      })
      .addCase(addUserThunk.pending, state => {
        state.isAdding = true
      })
      .addCase(addUserThunk.fulfilled, (state, action) => {
        state.data.push(action.payload)
        state.isAdding = false
      })
      .addCase(addUserThunk.rejected, (state, action) => {
        state.errorAdding = action.error
        state.isAdding = false
      })
      .addCase(deleteUserThunk.pending, (state, action) => {
        // Set isDeleting flag to id of user, so <UsersList /> can set appropriate spinner
        state.isDeleting = action.meta.arg.id
      })
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.data = state.data.filter(user => user.id !== action.payload.id)
        state.isDeleting = null
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.errorDeleting = action.error
        state.isDeleting = null
      })
})

export const usersReducer = usersSlice.reducer
