import {createSlice} from '@reduxjs/toolkit'
import {addCar} from './carsSlice'

const initialState = {
  name: '',
  cost: 0
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeCost: (state, action) => {
      state.cost = action.payload
    }
  },
  // Clear 'name' & 'cost' in <CarForm /> after user adds car, i.e. 'cars/addCar' action
  extraReducers: builder =>
    builder.addCase(addCar, state => {
      state.name = ''
      state.cost = 0
    })
})

export const formReducer = formSlice.reducer
export const {changeCost, changeName} = formSlice.actions
