import {HiTrash} from 'react-icons/hi2'
import {useDeletePhotoMutation} from '../store'

const PhotoItem = ({photo}) => {
  const [deletePhoto, results] = useDeletePhotoMutation()

  return (
    <div
      className='relative m-2 cursor-pointer'
      onClick={() => deletePhoto(photo)}
    >
      <img
        className='h-20 w-20'
        src={photo.url}
        alt='random photo'
      />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:text-red-700 hover:opacity-80'>
        <HiTrash className='text-3xl' />
      </div>
      {results.isError && <div>Error deleting photo!</div>}
    </div>
  )
}

export default PhotoItem
