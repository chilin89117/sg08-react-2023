import {useState} from 'react'
import {HiChevronDown, HiChevronLeft} from 'react-icons/hi2'

const Accordion = ({items}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1) // No item is open to start with

  const handleClick = idx => {
    // if (idx === expandedIndex) setExpandedIndex(-1) // Close everything when clicked on open item
    // else setExpandedIndex(idx) // Otherwise open item at 'idx'

    // Use functional way to update state in order to avoid stale values (Video 189)
    setExpandedIndex(prev => (idx === prev ? -1 : idx))
  }

  return (
    <div>
      {items.map((item, idx) => (
        <div key={item.id}>
          <div
            className='flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3'
            onClick={() => handleClick(idx)}
          >
            {item.label}
            <span className='text-2xl'>{idx === expandedIndex ? <HiChevronDown /> : <HiChevronLeft />}</span>
          </div>

          {idx === expandedIndex && <div className='border-b p-5'>{item.content}</div>}
        </div>
      ))}
    </div>
  )
}

export default Accordion
