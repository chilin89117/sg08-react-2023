import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUserThunk, deleteUserThunk, fetchUsersThunk} from '../store'
import UserItem from './UserItem.jsx'
import Skeleton from './ui/Skeleton.jsx'
import Button from './ui/Button.jsx'

const UsersList = () => {
  const dispatch = useDispatch()
  // state.users: data is array of users, isDeleting is user.id, and all others are boolean flags
  const {data, isLoading, isAdding, isDeleting, errorLoading, errorAdding, errorDeleting} = useSelector(
    state => state.users
  )

  // Fetch all users when component loads
  useEffect(() => {
    dispatch(fetchUsersThunk())
  }, [])

  // Add a user
  const handleAddUser = () => dispatch(addUserThunk())

  const handleDeleteUser = user => dispatch(deleteUserThunk(user))

  let content
  if (isLoading)
    content = (
      <Skeleton
        numBoxes={3}
        additionalClasses='m-3 h-10 w-full'
      />
    )
  else if (errorLoading) content = <div>Error fetching users!</div>
  else if (errorAdding) content = <div>Error adding user!</div>
  else
    content = data.map(user => (
      <UserItem
        key={user.id}
        user={user}
        onDelete={handleDeleteUser}
        isDeleting={isDeleting}
        hasError={errorDeleting}
      />
    ))

  return (
    <div>
      <div className='m-3 flex items-center justify-between'>
        <h1 className='m-2 text-xl font-bold'>Users</h1>
        <Button
          primary
          onClick={handleAddUser}
          loading={isAdding}
          className='w-28'
        >
          add user
        </Button>
      </div>
      {content}
    </div>
  )
}

export default UsersList
