import {GoTrash} from 'react-icons/go'
import {useDeleteAlbumMutation} from '../store'
import Button from './ui/Button.jsx'
import ExpandablePanel from './ui/ExpandablePanel.jsx'
import PhotosList from './PhotosList.jsx'

const AlbumItem = ({album}) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation()

  // 'header' is delete button, user.name, and possible error message
  const header = (
    <>
      <Button
        danger
        onClick={() => deleteAlbum(album)}
        loading={results.isLoading}
      >
        <GoTrash />
      </Button>
      {results.isError && <div>Error deleting album!</div>}
      <h3 className='text-md font-semibold'>{album.title}</h3>
    </>
  )

  return (
    <div>
      <ExpandablePanel
        key={album.id}
        header={header}
      >
        <PhotosList album={album} />
      </ExpandablePanel>
    </div>
  )
}

export default AlbumItem
