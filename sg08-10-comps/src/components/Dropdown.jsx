import {useEffect, useRef, useState} from 'react'
import {HiChevronDown, HiChevronLeft} from 'react-icons/hi2'
import Panel from './Panel.jsx'

// See Videos 205-214 for use of useRef and useEffect
const Dropdown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false)
  const divRef = useRef()

  // Add event listener to close main <div> if clicked outside of it
  useEffect(() => {
    const handler = e => {
      // In case reference not assigned to any element
      if (!divRef.current) return
      if (!divRef.current.contains(e.target)) setIsOpen(false)
    }

    // Set to capture phase so this is handled before component re-render (Video 209)
    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, [])

  // Pass selected option to parent so other components have access to it (Video 194)
  const handleOptionClick = option => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div
      className='relative w-48'
      ref={divRef}
    >
      <Panel
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen(prev => !prev)}
      >
        {value ? value.label : 'Select...'}
        {isOpen ? <HiChevronDown /> : <HiChevronLeft />}
      </Panel>

      {isOpen && (
        <Panel className='absolute top-full'>
          {options.map(option => (
            <div
              key={option.value}
              className='cursor-pointer rounded p-1 hover:bg-sky-100'
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  )
}

export default Dropdown
