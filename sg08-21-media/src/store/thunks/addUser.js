import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {faker} from '@faker-js/faker'

// Function to delay return of data (for showing isLoading state)
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const addUserThunk = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users', {
    name: faker.person.fullName()
  })

  await pause(500)

  // Return data as payload of 'fulfilled' action, and return error as error of 'rejected' action
  return response.data
})

export {addUserThunk}
