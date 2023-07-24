import {useDispatch} from 'react-redux'
import MoviePlaylist from './components/MoviePlayList.jsx'
import SongPlaylist from './components/SongPlayList.jsx'
import {reset} from './store'
import './styles.css'

const App = () => {
  const dispatch = useDispatch()

  // dispatches 'app/reset' for both movies and songs (Video 316)
  const handleResetClick = () => dispatch(reset())

  return (
    <div className='container is-fluid'>
      <button
        onClick={() => handleResetClick()}
        className='button is-danger'
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}

export default App
