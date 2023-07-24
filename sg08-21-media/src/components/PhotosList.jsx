import {useAddPhotoMutation, useFetchPhotosQuery} from '../store'
import PhotoItem from './PhotoItem.jsx'
import Skeleton from './ui/Skeleton.jsx'
import Button from './ui/Button.jsx'

const PhotosList = ({album}) => {
  const {data, error, isFetching} = useFetchPhotosQuery(album)

  const [addPhoto, results] = useAddPhotoMutation()

  const handleAddPhoto = () => addPhoto(album)

  let content
  if (isFetching)
    content = (
      <Skeleton
        numBoxes={4}
        additionalClasses='m-1 h-20 w-20'
      />
    )
  else if (error) content = <div>Error loading photos!</div>
  else
    content = data.map(photo => (
      <PhotoItem
        key={photo.id}
        photo={photo}
        hasError={results.isError}
      />
    ))

  return (
    <div className='m-3 w-full'>
      <div className='m-2 flex items-center justify-between'>
        <h3>Photos in {album.title}</h3>
        <Button
          primary
          onClick={handleAddPhoto}
          loading={results.isLoading}
          className='w-32'
        >
          add photo
        </Button>
      </div>
      <div className='flex flex-wrap justify-start'>{content}</div>
    </div>
  )
}

export default PhotosList
