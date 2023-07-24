import {useDispatch, useSelector} from 'react-redux'
import {addSong, removeSong} from '../store'
import {createRandomSong} from '../data'

const SongPlaylist = () => {
  const dispatch = useDispatch()
  const songPlaylist = useSelector(state => state.songs)

  // addSong(song) returns {type: 'song/addSong', payload: song}
  const handleSongAdd = song => dispatch(addSong(song))
  // removeSong(song) returns {type: 'song/removeSong', payload: song}
  const handleSongRemove = song => dispatch(removeSong(song))

  const renderedSongs = songPlaylist.map(song => (
    <li key={song}>
      {song}
      <button
        onClick={() => handleSongRemove(song)}
        className='button is-danger'
      >
        &times;
      </button>
    </li>
  ))

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle is-3'>Song Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className='button is-link'
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist
