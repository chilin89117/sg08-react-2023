import {useAddAlbumMutation, useFetchAlbumsQuery} from '../store'
import AlbumItem from './AlbumItem.jsx'
import Skeleton from './ui/Skeleton.jsx'
import Button from './ui/Button.jsx'

const AlbumsList = ({user}) => {
  // GET request to http://localhost:3005/albums?userId=1; no need for useEffect()
  const {data, error, isFetching} = useFetchAlbumsQuery(user)
  // store.album.queries has a key that combines endpoint and argument, e.g. fetchAlbums({id:..., name:...}),
  // with results stored in store.album.queries.data; so a 2nd request will not be made (Video 392-393)
  // useFetchAlbumsQuery(user)

  const [addAlbum, results] = useAddAlbumMutation()
  /* Properties of 'results':
  data: {title: 'Gorgeous Fresh Salad', userId: 1, id: 3}
  endpointName: "addAlbum"
  fulfilledTimeStamp: 1690139966728
  isError: false
  isLoading: false
  isSuccess: true
  isUninitialized: false
  originalArgs: {id: 1, name: 'Abbie'}
  requestId: "u_ecOSCXuyb2CL5Lodu80"
  reset: ƒ ()
  startedTimeStamp: 1690139966382
  status: "fulfilled"
  */

  // Will invalidate tag for 'fetchAlbum' and trigger re-fetching, but will re-fetch for
  // all users with albums panel open unless with fine-grained tag validation (Video 395)
  const handleAddAlbum = () => addAlbum(user)

  let content
  if (isFetching)
    content = (
      <Skeleton
        numBoxes={2}
        additionalClasses='m-2 h-8 w-full'
      />
    )
  else if (error) content = <div>Error loading albums!</div>
  else
    content = data.map(album => (
      <AlbumItem
        key={album.id}
        album={album}
        hasError={results.isError}
      />
    ))

  return (
    <div className='m-3 w-full'>
      <div className='m-2 flex items-center justify-between'>
        <h3 className='text-md font-bold'>Albums for {user.name}</h3>
        <Button
          primary
          onClick={handleAddAlbum}
          loading={results.isLoading}
          className='w-32'
        >
          add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumsList
