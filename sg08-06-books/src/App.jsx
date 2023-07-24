import {useEffect} from 'react'
import {useBooksCtx} from './contexts/BooksCtx.jsx'
import BookList from './component/BookList.jsx'
import BookCreate from './component/BookCreate.jsx'

const App = () => {
  const {getBooks} = useBooksCtx()

  useEffect(() => {
    getBooks()
  }, [getBooks]) // Make sure to use useCallback() on getBooks() to prevent infinite requests

  return (
    <div className='app'>
      <h1>Reading List</h1>

      {/* Show list of books */}
      <BookList />

      {/* Show form to create new book */}
      <BookCreate />
    </div>
  )
}

export default App
