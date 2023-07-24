import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <div className='search-bar'>
      {/* Use <form> so ENTER key triggers submit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='term'>Enter search term:</label>
        <input
          id='term'
          type='text'
          autoFocus
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
