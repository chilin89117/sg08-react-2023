import {GoTrash} from 'react-icons/go'
import AlbumsList from './AlbumsList.jsx'
import ExpandablePanel from './ui/ExpandablePanel.jsx'
import Button from './ui/Button.jsx'

const UserItem = ({user, onDelete, isDeleting, hasError}) => {
  // 'header' is delete button, user.name, and possible error message
  const header = (
    <>
      <Button
        danger
        loading={isDeleting === user.id}
        onClick={() => onDelete(user)}
      >
        <GoTrash />
      </Button>
      {hasError && <div>Error deleting user!</div>}
      <h3 className='text-lg font-bold'>{user.name}</h3>
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UserItem
