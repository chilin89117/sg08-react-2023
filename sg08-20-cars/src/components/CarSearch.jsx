import {useDispatch, useSelector} from 'react-redux'
import {changeSearchTerm} from '../store'

const CarSearch = () => {
  const dispatch = useDispatch()

  const searchTerm = useSelector(state => state.cars.searchTerm)

  const handleChange = e => {
    dispatch(changeSearchTerm(e.target.value))
  }

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className='search field is-horizontal'>
        <label htmlFor='input' className='label'>
          Search
        </label>
        <input id='input' className='input' value={searchTerm} onChange={handleChange} />
      </div>
    </div>
  )
}

export default CarSearch
