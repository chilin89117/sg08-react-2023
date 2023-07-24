import {createContext, useCallback, useContext, useState} from 'react'
import axios from 'axios'

const DB_URL = 'http://localhost:3001/books'

const BooksCtx = createContext()

const BooksProvider = ({children}) => {
  const [books, setBooks] = useState([])

  // Prevent getBooks() from being re-created on re-render (Videos 146-148)
  const getBooks = useCallback(async () => {
    const response = await axios.get(`${DB_URL}`)
    setBooks(response.data)
  }, [])

  const createBook = async title => {
    const response = await axios.post(`${DB_URL}`, {title})
    // 'response.data' is {id: ..., title: '...'}
    setBooks(prev => [...prev, response.data])
  }

  const updateBookById = async (id, title) => {
    const response = await axios.put(`${DB_URL}/${id}`, {title})
    // 'response.data' is {id: ..., title: '...'}
    // Use '...response.data' to update entire book so all fields of book object are in sync (Video 128)
    setBooks(prev => prev.map(book => (book.id === response.data.id ? {...book, ...response.data} : book)))
  }

  const deleteBookById = async id => {
    await axios.delete(`${DB_URL}/${id}`)
    setBooks(prev => prev.filter(book => book.id !== id))
  }

  return (
    <BooksCtx.Provider value={{books, getBooks, createBook, updateBookById, deleteBookById}}>
      {children}
    </BooksCtx.Provider>
  )
}

// Custom hook to return context object and avoid:
// 1. exporting context object
// 2. repeated use of 'useContext(BooksCtx)'
const useBooksCtx = () => {
  const ctx = useContext(BooksCtx)
  if (ctx === undefined) throw new Error('Context not defined for this component')
  return ctx
}

export {BooksProvider, useBooksCtx}
