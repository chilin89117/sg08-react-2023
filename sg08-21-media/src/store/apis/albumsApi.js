// 'createApi' from @reduxjs/toolkit/query does not create custom hooks,
// must import from @reduxjs/toolkit/query/react
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

// Function to delay return of data (for showing isLoading state)
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(500)
      return fetch(...args) // Delay execution of fetch()
    }
  }),
  endpoints: builder => ({
    // Generate hook: albumsApi.useFetchAlbumsQuery()
    fetchAlbums: builder.query({
      // 'user' is from useFetchAlbumsQuery(user) in <AlbumsList />
      query: user => ({
        url: '/albums',
        params: {userId: user.id},
        method: 'GET'
      }),
      // Set tag for this query for specific user (Videos 392-395)
      // 'arg' is 'user' from useFetchAlbumsQuery(user) in <AlbumsList />
      // Use an array of tags (Video 402):
      // a. one for user to trigger fetchAlbums after adding an album
      // b. one for each album to trigger fetchAlbums after deleting an album
      providesTags: (result, error, arg) => {
        const tags = result.map(album => ({type: 'Album', id: album.id}))
        tags.push({type: 'AlbumOwner', id: arg.id})
        return tags
      }
    }),
    // Generate hook: albumsApi.useAddAlbumMutation()
    addAlbum: builder.mutation({
      // 'user' is from addAlbum(user) in <AlbumList />
      query: user => ({
        url: '/albums',
        method: 'POST',
        body: {
          title: faker.commerce.productName(),
          userId: user.id
        }
      }),
      // Invalidate tag to trigger 'fetchAlbums' after adding new album (Videos 392-395)
      // 'arg' is 'user' from addAlbum(user) in <AlbumList />
      // Note: must return an array
      invalidatesTags: (result, error, arg) => [{type: 'AlbumOwner', id: arg.id}]
    }),
    // Generate hook: albumsApi.useDeleteAlbumMutation()
    deleteAlbum: builder.mutation({
      // 'album' is from deleteAlbum(album) in <AlbumItem />
      query: album => ({
        url: `/albums/${album.id}`,
        method: 'DELETE'
      }),
      // Invalidate tag to trigger 'fetchAlbums' after deleting album,
      // 'arg' is 'album' from deleteAlbum() in <AlbumItem /> (Videos 400-402)
      // Note: must return an array
      invalidatesTags: (result, error, arg) => [{type: 'Album', id: arg.id}]
    })
  })
})

export const {useAddAlbumMutation, useDeleteAlbumMutation, useFetchAlbumsQuery} = albumsApi
export {albumsApi}
