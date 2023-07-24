import {useDispatch, useSelector} from 'react-redux'
import {deleteCarById} from '../store'

const CarList = () => {
  const dispatch = useDispatch()

  // Destructure 'searchTerm' and 'cars' from state.cars and filter with 'searchTerm'
  // Destructure 'name' from state.form to highlight (make bold) car already in list
  // Good place for derived state using useSelector()
  const {cars, name} = useSelector(({form: {name}, cars: {searchTerm, cars}}) => {
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {cars: filteredCars, name}
  })

  // action.type must be an id
  const handleDelete = car => dispatch(deleteCarById(car.id))

  return (
    <>
      <div>Cars List</div>
      <div className='car-list'>
        {cars.map(car => {
          const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

          return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
              <p>
                {car.name} - ${car.cost}
              </p>
              <button className='button is-danger' onClick={() => handleDelete(car)}>
                Delete
              </button>
            </div>
          )
        })}
        <hr />
      </div>
    </>
  )
}

export default CarList
