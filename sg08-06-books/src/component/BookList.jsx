import {useBooksCtx} from '../contexts/BooksCtx.jsx'
import BookItem from './BookItem.jsx'

// Show a list of books using <BookItem />
const BookList = () => {
  const {books} = useBooksCtx()

  return (
    <div className='book-list'>
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </div>
  )
}

export default BookList
