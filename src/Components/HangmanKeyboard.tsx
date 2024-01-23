import { useEffect } from 'react';
import { useWord } from '../Context/useWord';
import './HangmanKeyboard.css'

function generateAlphabetList(): string[] {
  const alphabetList = [];

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabetList.push(letter);
  }
  return alphabetList;
}


const HangmanKeyboard = (  ) => {

  const { wordToGuess, guessedLetter, setGuessedLetter } = useWord()
  
  const alphabetList = generateAlphabetList()

  useEffect( () => {

    alphabetList.forEach((alphabet) => {
      const target = document.querySelector(`#alphabet-${alphabet}`) as Element

      function onKeyClick ( event: Event ) {
        if(wordToGuess.find(letter => letter === alphabet)){
          target.classList.add("clicked", "correct")
        }
        else{
          target.classList.add("clicked", "wrong")
        }
        setGuessedLetter( (prev) => [...prev, alphabet] )
      }

      target.addEventListener('click', onKeyClick, { once: true })
    })

    
  },[])



  return (
    <div className='keyboard-container'>
      {alphabetList.map( (alphabet) => {
        return <div className='alphabet-container' id={`alphabet-${alphabet}`} key={`alphabet-${alphabet}`}>{alphabet}</div>
      } )}
    </div>
  )
}

export default HangmanKeyboard
