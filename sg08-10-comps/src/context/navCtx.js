// See Section 13
import {createContext, useContext, useEffect, useState} from 'react'

const NavCtx = createContext()

const NavProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // Add event listener for user clicking browser back button
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }

    // Works when new path is added via pushState() in navigate()
    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  // Use pushState() to navigate without causing total page refresh (Video 224)
  const navigate = to => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  return <NavCtx.Provider value={{currentPath, navigate}}>{children}</NavCtx.Provider>
}

// Avoid exporting context and using useContext(NavCtx) (Video 229)
const useNavCtx = () => {
  const ctx = useContext(NavCtx)
  if (ctx === undefined) throw new Error('Context not defined')
  return ctx
}

export {NavProvider, useNavCtx}
