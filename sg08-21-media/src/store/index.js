import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {usersReducer} from './slices/usersSlice.js'
import {albumsApi} from './apis/albumsApi.js'
import {photosApi} from './apis/photosApi.js'

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, // Use '[albumsApi.reducerPath]' instead of 'albums' (Video 386)
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware)
})

setupListeners(store.dispatch)

export {store}
export * from './thunks/fetchUsers.js'
export * from './thunks/addUser.js'
export * from './thunks/deleteUser.js'
export {useAddAlbumMutation, useDeleteAlbumMutation, useFetchAlbumsQuery} from './apis/albumsApi.js'
export {useAddPhotoMutation, useDeletePhotoMutation, useFetchPhotosQuery} from './apis/photosApi.js'
