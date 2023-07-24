import classNames from 'classnames'

// See tailwind.config.js for animation and keyframe
const Skeleton = ({numBoxes, additionalClasses}) => {
  // Classes for outer and inner boxes
  const outerClassNames = classNames(
    'relative',
    'mb-2.5',
    'overflow-hidden',
    'rounded',
    'bg-gray-200',
    additionalClasses
  )
  const innerClassNames = classNames(
    'absolute',
    'inset-0',
    '-translate-x-full',
    'animate-shimmer',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  )

  const boxes = Array(numBoxes)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className={outerClassNames}
      >
        <div className={innerClassNames} />
      </div>
    ))

  return boxes
}

export default Skeleton
