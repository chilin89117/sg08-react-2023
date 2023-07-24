import {useState} from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import './AnimalShow.css'

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse
}

const AnimalShow = ({type}) => {
  const [clicks, setClicks] = useState(0)

  // Increase size of heart svg based on number of times the <div> is clicked (up to 7)
  const handleClick = () => {
    setClicks(prev => (prev < 7 ? prev + 1 : prev))
  }

  return (
    <div
      className='animal-show'
      onClick={handleClick}
    >
      <img
        className='animal'
        src={svgMap[type]}
        alt={type}
      />
      <img
        className='heart'
        src={heart}
        alt='heart'
        style={{width: 20 + 10 * clicks + 'px'}}
      />
    </div>
  )
}

export default AnimalShow
