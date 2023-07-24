import 'bulma/css/bulma.min.css'
import alexaImg from './images/alexa.png' // < 10,000 bytes: converted to base64 string included in bundle
import cortanaImg from './images/cortana.png' // < 10,000 bytes: converted to base64 string included in bundle
import siriImg from './images/siri.png' // > 10,000 bytes: kept as separate file

import ProfileCard from './ProfileCard'

const App = () => (
  <div>
    <section className='hero is-primary'>
      <div className='hero-body'>
        <p className='title'>Personal Digital Assistants</p>
      </div>
    </section>

    <div className='container'>
      <section className='section'>
        <div className='columns'>
          <div className='column is-4'>
            <ProfileCard
              title='Alexa'
              handle='@alexa99'
              image={alexaImg}
              description='Alexa was created by Amazon and helps you buy things.'
            />
          </div>

          <div className='column is-4'>
            <ProfileCard
              title='Cortana'
              handle='@cortana32'
              image={cortanaImg}
              description='Cortana was made by Microsoft. Who knows what it does!?'
            />
          </div>

          <div className='column is-4'>
            <ProfileCard
              title='Siri'
              handle='@siri01'
              image={siriImg}
              description='Siri was made by Apple and is being phased out.'
            />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default App
