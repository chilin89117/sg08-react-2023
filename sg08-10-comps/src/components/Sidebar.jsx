import Link from './Link.jsx'

const Sidebar = () => {
  const links = [
    {label: 'Dropdown', path: '/'},
    {label: 'Accordion', path: '/accordion'},
    {label: 'Buttons', path: '/buttons'},
    {label: 'Modal', path: '/modal'},
    {label: 'Table', path: '/table'},
    {label: 'Counter', path: '/counter'}
  ]

  return (
    <div className='sticky top-0 flex flex-col items-start overflow-y-scroll'>
      {/* Add 'mb-3' when <Link /> is used in <Sidebar /> (Video 231) */}
      {/* 'activeClassName' will be applied when 'to' is same as current path (Video 231) */}
      {links.map(link => (
        <Link
          className='mb-3'
          activeClassName='pl-2 font-bold border-l-4 border-blue-500'
          key={link.label}
          to={link.path}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
