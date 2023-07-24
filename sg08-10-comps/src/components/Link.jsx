import classnames from 'classnames'
import {useNavCtx} from '../context/navCtx.js'

// Use <Link> to override normal navigation to go to path inside our app;
// otherwise use <a> (Video 225)
const Link = ({to, className, activeClassName, children}) => {
  const {currentPath, navigate} = useNavCtx()

  // Video 228
  // 'activeClassName' (Video 231)
  const classes = classnames('text-blue-500', className, currentPath === to && activeClassName)

  const handleClick = e => {
    // Let browser open a new window when CTRL (Win) or COMMAND (Mac)
    // key is held down during click (Video 227)
    if (e.ctrlKey || e.metaKey) return

    // Prevent <a> from triggering total page refresh
    e.preventDefault()

    // Programmatic navigation
    navigate(to)
  }

  return (
    <a
      className={classes}
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default Link
