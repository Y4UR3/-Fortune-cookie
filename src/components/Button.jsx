import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from "../utils/phrases.json"
import arrImage from "../utils/photos.json"

const Button = ({setQuoteRandom, setquotePhoto}) => {

    const handleChangePhrase = () => {
     setQuoteRandom(getRandomFromArr(phrases))
     setquotePhoto(getRandomFromArr(arrImage))  
    }
  return (
    <button className="app__btn" onClick={handleChangePhrase}>Ver otra frase</button>
  )
}

export default Button