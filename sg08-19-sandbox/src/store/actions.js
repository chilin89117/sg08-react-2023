import {createAction} from '@reduxjs/toolkit'

// Action for both movieSlice and songSlice (Video 316)
// reset() returns {type: 'app/reset', payload: undefined} (Video 316)
export const reset = createAction('app/reset')
