import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions.js'

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // action.payload is a string (song title)
    addSong: (state, action) => {
      state.push(action.payload)
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
  },
  // Watch for 'movie/reset' action for movieSlice and set song list to [] (Video 313-314)
  // extraReducers: builder => builder.addCase('movie/reset', () => [])

  // movieSlice.actions.reset.toString() returns 'movie/reset' and avoids typos (Video 315)
  // Disadvantage: songSlice is dependent on reducer in movieSlice (Video 316)
  // extraReducers: builder => builder.addCase(movieSlice.actions.reset.toString(), () => [])
  // extraReducers: builder => builder.addCase(movieSlice.actions.reset, () => [])

  extraReducers: builder =>
    builder.addCase(reset, () => {
      return []
    }) // Video 316
})

// songSlice.actions.addSong() creates action object {type: 'song/addSong', payload: ...}
export const {addSong, removeSong} = songSlice.actions
export const songReducer = songSlice.reducer
