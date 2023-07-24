import {useState} from 'react'
import {getImages} from './api.js'
import SearchBar from './components/SearchBar.jsx'
import ImageList from './components/ImageList.jsx'

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = async searchTerm => {
    if (!searchTerm.trim().length) return

    const response = await getImages(searchTerm)
    // Update state of component
    setImages(response.data.results)
  }

  return (
    <div className='app'>
      {/* Pass handleSubmit() to <SearchBar /> and use form submission in <SearchBar /> to trigger it */}
      <SearchBar onSubmit={handleSubmit} />

      {/* Pass retrieved images to <ImageList /> */}
      {images && <ImageList images={images} />}
    </div>
  )
}

export default App
