import {useState} from 'react'
import {useBooksCtx} from '../contexts/BooksCtx.jsx'
import BookEdit from './BookEdit.jsx'

const BookItem = ({book}) => {
  // Component state to toggle showing or not showing <BookEdit />
  const [showEdit, setShowEdit] = useState(false)

  const {deleteBookById} = useBooksCtx()

  return (
    <div className='book-show'>
      {/* Get a random image by providing book.id as seed */}
      {/* Otherwise turn on 'disable cache' in dev tools to get unique images */}
      <img
        src={`https://picsum.photos/seed/${book.id}300/200`}
        alt={book.title}
      />

      {!showEdit ? (
        <h3>{book.title}</h3>
      ) : (
        <BookEdit
          book={book}
          onUpdate={() => setShowEdit(false)}
        />
      )}

      <div className='actions'>
        <button
          className='edit'
          onClick={() => setShowEdit(prev => !prev)}
        >
          Edit
        </button>

        <button
          className='delete'
          onClick={() => deleteBookById(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookItem
