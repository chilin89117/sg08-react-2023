// 'createApi' from @reduxjs/toolkit/query does not create custom hooks,
// must import from @reduxjs/toolkit/query/react
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

// Function to delay return of data (for showing isLoading state)
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(500)
      return fetch(...args) // Delay execution of fetch()
    }
  }),
  endpoints: builder => ({
    // Generate hook: photosApi.useFetchPhotosQuery()
    fetchPhotos: builder.query({
      // 'album' is from useFetchPhotosQuery(album) in <PhotosList />
      query: album => ({
        url: '/photos',
        params: {albumId: album.id},
        method: 'GET'
      }),
      // Set tag for this query for specific album (Video 409)
      // 'arg' is 'album' from useFetchPhotosQuery(album) in <PhotosList />
      // Use an array of tags:
      // a. one for album to trigger fetchPhotos after adding a photo
      // b. one for each photo to trigger fetchPhotos after deleting a photo
      providesTags: (result, error, arg) => {
        const tags = result.map(photo => ({type: 'Photo', id: photo.id}))
        tags.push({type: 'PhotoAlbum', id: arg.id})
        return tags
      }
    }),
    // Generate hook: photosApi.useAddPhotoMutation()
    addPhoto: builder.mutation({
      // 'album' is from addPhoto(album) in <PhotosList />
      query: album => ({
        url: '/photos',
        body: {albumId: album.id, url: faker.image.url({width: 150, height: 150})},
        method: 'POST'
      }),
      invalidatesTags: (result, error, arg) => [{type: 'PhotoAlbum', id: arg.id}]
    }),
    // Generate hook: photosApi.useDeletePhotoMutation()
    deletePhoto: builder.mutation({
      // 'photo' is from deletePhoto(photo) in <PhotoItem />
      query: photo => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, arg) => [{type: 'Photo', id: arg.id}]
    })
  })
})

export const {useAddPhotoMutation, useDeletePhotoMutation, useFetchPhotosQuery} = photosApi
export {photosApi}
