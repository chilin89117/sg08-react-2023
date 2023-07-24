import {useEffect} from 'react'
import {createPortal} from 'react-dom'

const Modal = ({onClose, actions, children}) => {
  // Prevent <body> from being scrollable while <modal/> is displayed (Videos 241-242)
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  // Show modal in portal (Video 237)
  // Use 'fixed' class to position <Modal /> in viewport, rather than relative to <body> (Video 242)
  return createPortal(
    <>
      <div
        className='fixed inset-0 bg-gray-300 opacity-80'
        onClick={onClose}
      ></div>
      <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white p-8'>
        <div className='flex flex-col gap-6'>
          {children}
          <div className='flex justify-end'>{actions}</div>
        </div>
      </div>
    </>,
    document.getElementById('modal-container')
  )
}

export default Modal
