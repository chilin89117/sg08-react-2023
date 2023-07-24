import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Function to delay return of data (for showing isLoading state)
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const deleteUserThunk = createAsyncThunk('users/delete', async user => {
  await axios.delete(`http://localhost:3005/users/${user.id}`)

  await pause(500)

  // Return data as payload of 'fulfilled' action, and return error as error of 'rejected' action
  // axios.delete returns an empty object, so return 'user' instead of the usual response.data (Video 375)
  return user
})

export {deleteUserThunk}
