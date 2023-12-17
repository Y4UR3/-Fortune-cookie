import { useState } from 'react'
import './App.css'
import getRandomFromArr from './utils/getRandomFromArr'
import phrases from './utils/phrases.json'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrImage from './utils/photos.json'

function App() {

  const photo = getRandomFromArr(arrImage)
  const pharse = getRandomFromArr(phrases)

  const [quoteRandom, setQuoteRandom] = useState(pharse)
  const [quotePhoto, setquotePhoto] = useState(photo)

  const objstyle = {
    backgroundImage: `url(/fondo${quotePhoto}.jpg)`
  }
  const fondo = {
    backgroundImage: `url(/rectangle1.svg)`
  }

  return (
    <div className='app' style={objstyle}>
      <h1 className='app__title' >Galleta de la fortuna</h1>
      <div className='app__card' > 
        <Phrase quoteRandom={quoteRandom}/>
        
      </div>
      <div>
      <Button 
        setQuoteRandom={setQuoteRandom}
        setquotePhoto={setquotePhoto} />
      </div>
      
    </div>
  )
}

export default App
