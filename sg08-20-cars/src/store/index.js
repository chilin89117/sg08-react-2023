import {configureStore} from '@reduxjs/toolkit'
import {carsReducer, addCar, deleteCarById, changeSearchTerm} from './slices/carsSlice'
import {formReducer, changeName, changeCost} from './slices/formSlice'

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer
  }
})

export {carsReducer, addCar, deleteCarById, changeSearchTerm, formReducer, changeName, changeCost, store}
