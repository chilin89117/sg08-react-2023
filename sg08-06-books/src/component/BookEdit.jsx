import {useState} from 'react'
import {useBooksCtx} from '../contexts/BooksCtx.jsx'

const BookEdit = ({book, onUpdate}) => {
  const [title, setTitle] = useState(book.title) // Component state

  const {updateBookById} = useBooksCtx()

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim()) return
    updateBookById(book.id, title)
    onUpdate() // Use function from <BookItem /> to close this component after update
  }

  return (
    <form
      className='book-edit'
      onSubmit={handleSubmit}
    >
      <label>Title</label>

      <input
        type='text'
        className='input'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button className='button is-primary'>Update</button>
    </form>
  )
}

export default BookEdit
