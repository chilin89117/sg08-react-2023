import {useState} from 'react'
import AnimalShow from './AnimalShow.jsx'
import './App.css'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  const index = Math.floor(Math.random() * animals.length)

  return animals.at(index)
}

const App = () => {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, idx) => (
    <AnimalShow
      key={idx}
      type={animal}
    />
  ))

  return (
    <div className='app'>
      <button onClick={handleClick}>add animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  )
}

export default App
