import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

const ExpandablePanel = ({header, children}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='mb-2 rounded border border-gray-300'>
      <div className='flex items-center justify-between p-2'>
        {/* 'header' includes delete button and user.name */}
        <div className='flex items-center justify-start gap-4 p-2'>{header}</div>
        {/* Chevron buttons for expanding and collapsing panel */}
        <div
          className='cursor-pointer rounded-full bg-green-700 text-3xl font-bold text-white'
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>

      {expanded && <div className='flex items-center justify-start gap-4 border-t p-2'>{children}</div>}
    </div>
  )
}

export default ExpandablePanel
