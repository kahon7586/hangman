import { useEffect } from 'react'
import { useWord } from '../Context/useWord'
import './HangmanWord.css'
import { useUpdateEffect } from '../Utils/useUpdateEffect'



const HangmanWord = (  ) => {

  const { wordToGuess, guessedLetter, gameStatus, setGuessWrongTime} = useWord()

  useUpdateEffect( () => {

    const [finalLetter] = guessedLetter.slice(-1)
    if(finalLetter === undefined) return 
    
    const isLetterGuessed: boolean = wordToGuess.includes(finalLetter)

    if(isLetterGuessed){
      const targetList = document.querySelectorAll(`.letter-${finalLetter}`)
      targetList.forEach(target => target.classList.remove("unguessed"))
      console.log('correct')
      return
    }

    if(!isLetterGuessed){
      setGuessWrongTime( prev => prev + 1 )
      console.log('wrong')
      return
    }

  }, [guessedLetter] )

  useEffect( () => {

    if( gameStatus === "lose"){
      const targetList = document.querySelectorAll(`.unguessed`)
      targetList.forEach( target => target.classList.add("failed") )
    }

    if( gameStatus === "win" ){
      const targetList = document.querySelectorAll(`.letter-container`)
      targetList.forEach( target => target.classList.add("succeed") )
    }

  }, [gameStatus])

  return (
    <div className='word-container'>
      {wordToGuess.map( (letter, index) => {
        return <div key={`${letter}-${index}`} className={`letter-container letter-${letter} unguessed`}>{letter}</div>
      } )}
    </div>
  )
}

export default HangmanWord
