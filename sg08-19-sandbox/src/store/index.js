import {configureStore} from '@reduxjs/toolkit'
import {addMovie, removeMovie, movieReducer} from './slices/movieSlice.js'
import {addSong, removeSong, songReducer} from './slices/songSlice.js'
import {reset} from './actions.js'

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  }
})

// Everything related to redux is exported from this file (Video 318)
export {addMovie, removeMovie, addSong, removeSong, reset, store}
