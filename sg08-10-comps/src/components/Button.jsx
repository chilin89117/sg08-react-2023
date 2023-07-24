import classnames from 'classnames' // Join classNames conditionally

// Destructure props for <Button /> and pass '...rest' (e.g. onClick, onMouseEnter) to <button />
const Button = ({primary, secondary, success, warning, danger, rounded, outline, children, ...rest}) => {
  // Use flexbox to align children, e.g. icon and text.
  // Add 'rest.className' to include any additional classes that may have been added to <Button /> (Video 170).
  const classes = classnames('flex items-center gap-x-2 px-3 py-1.5 uppercase border', rest.className, {
    'bg-blue-500 border-blue-500 text-white': primary,
    'bg-gray-900 border-gray-900 text-white': secondary,
    'bg-green-500 border-green-500 text-white': success,
    'bg-yellow-400 border-yellow-400 text-white': warning,
    'bg-red-500 border-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  })

  // Place 'className' after '{...rest}' so it won't get overwritten by rest.className
  return (
    <button
      {...rest}
      className={classes}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  // Validation: a button can have only 1 of the following 5 variations
  checkVariation: ({primary, secondary, success, warning, danger}) => {
    // Make sure sum is 1
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
    if (count !== 1) throw new Error('<Button /> must have 1 and only 1 variation')
  }
}

export default Button
