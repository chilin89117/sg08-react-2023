import {useNavCtx} from '../context/navCtx.js'

const Route = ({path, children}) => {
  const {currentPath} = useNavCtx()

  if (path === currentPath) return children
  else return null
}

export default Route
