import React from 'react'

const Phrase = ({quoteRandom}) => {

    console.log(quoteRandom);
  return (
    <>
    <p className='app__phrase' >{quoteRandom.phrase}</p>
    <p className='app__phrase' > <strong>Autor :</strong> {quoteRandom.author}</p>
    </>
  )
}

export default Phrase