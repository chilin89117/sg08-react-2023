import {useState} from 'react'
import {useBooksCtx} from '../contexts/BooksCtx.jsx'

const BookCreate = () => {
  const [title, setTitle] = useState('') // Component state
  const {createBook} = useBooksCtx()

  const handleSubmit = e => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>

      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
          placeholder='book title'
        />
        <button
          className='button'
          type='submit'
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default BookCreate
