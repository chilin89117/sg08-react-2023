import axios from 'axios'

const getImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_AK}`
    },
    params: {
      query: term
    }
  })

  return response
}

export {getImages}
