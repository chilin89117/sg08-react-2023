import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  searchTerm: '',
  cars: []
}

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    // 'cars/addCar' action will trigger extraReducers in formSlice.js
    addCar: (state, action) => {
      state.cars.push({id: nanoid(), ...action.payload})
    },
    deleteCarById: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload)
    }
  }
})

export const carsReducer = carsSlice.reducer
export const {changeSearchTerm, addCar, deleteCarById} = carsSlice.actions
