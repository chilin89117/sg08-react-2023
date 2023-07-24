import classnames from 'classnames'

// Video 204 (see also <Button />)
const Panel = ({children, ...rest}) => {
  const classes = classnames('w-full p-3 bg-white border border-gray-500 rounded shadow', rest.className)

  return (
    <div
      {...rest}
      className={classes}
    >
      {children}
    </div>
  )
}

export default Panel
