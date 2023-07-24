import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Function to delay return of data (for showing isLoading state)
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const fetchUsersThunk = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users')

  await pause(500)

  // Returned data will be assigned to 'payload' property of the 'fulfilled' action type below,
  // but error will be assigned to 'error' property of the 'rejected' action type (Video 355)
  return response.data
})

// Properties of thunk function and their corresponding action type
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export {fetchUsersThunk}
