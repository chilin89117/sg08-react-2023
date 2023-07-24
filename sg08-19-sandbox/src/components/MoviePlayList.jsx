import {useDispatch, useSelector} from 'react-redux'
import {addMovie, removeMovie} from '../store'
import {createRandomMovie} from '../data'

const MoviePlaylist = () => {
  const dispatch = useDispatch()
  const moviePlaylist = useSelector(state => state.movies)

  // addMovie(movie) returns {type: 'movie/addMovie', payload: movie}
  const handleMovieAdd = movie => dispatch(addMovie(movie))
  // removeMovie(movie) returns {type: 'movie/removeMovie', payload: movie}
  const handleMovieRemove = movie => dispatch(removeMovie(movie))

  const renderedMovies = moviePlaylist.map(movie => (
    <li key={movie}>
      {movie}
      <button
        onClick={() => handleMovieRemove(movie)}
        className='button is-danger'
      >
        &times;
      </button>
    </li>
  ))

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle is-3'>Movie Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className='button is-link'
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  )
}

export default MoviePlaylist
