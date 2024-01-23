import { useEffect } from 'react'
import { useWord } from '../Context/useWord'
import './HangmanWord.css'



const HangmanWord = (  ) => {

  const { wordToGuess, guessedLetter} = useWord()

  useEffect( () => {

    const [finalLetter] = guessedLetter.slice(-1)
    const isLetterGuessed: boolean = wordToGuess.includes(finalLetter)

    if(isLetterGuessed){
      const targetList = document.querySelectorAll(`.letter-${finalLetter}`)
      targetList.forEach(target => target.classList.remove("hide"))
    }

  }, [guessedLetter] )

  return (
    <div className='word-container'>
      {wordToGuess.map( (letter, index) => {
        return <div key={`${letter}-${index}`} className={`letter-container letter-${letter} hide`}>{letter}</div>
      } )}
    </div>
  )
}

export default HangmanWord
