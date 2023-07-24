import {useReducer} from 'react'
import {produce} from 'immer' // Video 294
import Button from '../components/Button.jsx'
import Panel from '../components/Panel.jsx'

// Use variables instead of raw strings for action types for easier detection of typos
const SET_VALUE = 'setValue'
const PLUS_ONE = 'plusOne'
const MINUS_ONE = 'minusOne'
const ADD_VALUE = 'addValue'

// reducer without Immer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case SET_VALUE:
//       return {...state, valueToAdd: action.payload}
//     case PLUS_ONE:
//       return {...state, count: state.count + 1}
//     case MINUS_ONE:
//       return {...state, count: state.count - 1}
//     case ADD_VALUE:
//       return {...state, count: state.count + state.valueToAdd, valueToAdd: 0}
//     default:
//       return state // Ignore unknown action types
//   }
// }

// reducer with Immer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE:
      state.valueToAdd = action.payload
      return
    case PLUS_ONE:
      state.count += 1
      return
    case MINUS_ONE:
      state.count -= 1
      return
    case ADD_VALUE:
      state.count += state.valueToAdd
      state.valueToAdd = 0
      return
    default:
      return state // Ignore unknown action types
  }
}

const CounterPage = ({initialCount}) => {
  const initialState = {
    count: initialCount,
    valueToAdd: 0
  }

  const [{count, valueToAdd}, dispatch] = useReducer(produce(reducer), initialState)

  // Add 'valueToAdd' to 'count' in state when form submits
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: ADD_VALUE})
  }

  // When <input /> changes, set 'valueToAdd' in state
  const handleChange = e => {
    const inputValue = parseInt(e.target.value) || 0
    dispatch({type: SET_VALUE, payload: inputValue})
  }

  return (
    <Panel className='m-3 w-1/2'>
      <h1 className='text-lg'>Count is {count}</h1>
      <div className='my-3 flex gap-4'>
        <Button
          secondary
          onClick={() => dispatch({type: MINUS_ONE})}
        >
          Minus
        </Button>

        <Button
          primary
          onClick={() => dispatch({type: PLUS_ONE})}
        >
          Plus
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        {/* If 'valueToAdd' is 0, show '' so it's easier to enter e.g. '10' */}
        <input
          type='number'
          value={valueToAdd || ''}
          onChange={handleChange}
          className='m-3 border border-gray-300 bg-gray-100 p-1'
        />
        <Button primary>Add It!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
