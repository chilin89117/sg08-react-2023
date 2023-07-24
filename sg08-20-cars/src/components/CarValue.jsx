import {useSelector} from 'react-redux'

const CarValue = () => {
  // Destructure 'searchTerm' and 'cars' from state.cars and filter with 'searchTerm'
  // Good place for derived state using useSelector()
  const totalCost = useSelector(({cars: {searchTerm, cars}}) =>
    cars
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0)
  )

  return <div className='car-value'>Total cost: ${totalCost}</div>
}

export default CarValue
