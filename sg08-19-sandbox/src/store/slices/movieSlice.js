import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions.js'

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    // action.payload is a string (movie title)
    addMovie: (state, action) => {
      state.push(action.payload)
    },
    removeMovie: (state, action) => {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
    // reset: () => {
    //   // state = [] // Won't work with immer because this is a re-assignment of variable, not mutation (Video 311)
    //   // state.movies = [] // This is a mutation so it will work with immer (Video 311)
    //   return []
    // }
  },
  extraReducers: builder =>
    builder.addCase(reset, () => {
      return []
    }) // Video 316
})

// movieSlice.actions.addMovie() creates action object {type: 'movie/addMovie', payload: ...}
export const {addMovie, removeMovie} = movieSlice.actions
export const movieReducer = movieSlice.reducer
