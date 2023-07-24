import {HiBellAlert} from 'react-icons/hi2'
import Button from '../components/Button.jsx'

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button
          primary
          onClick={() => console.log('Click!!!')}
          className='mb-5'
        >
          <HiBellAlert />
          Click
        </Button>
      </div>

      <div>
        <Button secondary>Buy Now</Button>
      </div>

      <div>
        <Button
          success
          outline
        >
          See More
        </Button>
      </div>

      <div>
        <Button
          warning
          rounded
          outline
        >
          Hide Ads
        </Button>
      </div>

      <div>
        <Button
          danger
          rounded
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
