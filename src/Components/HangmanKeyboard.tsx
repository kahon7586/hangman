import { useEffect, useState } from 'react';
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

const alphabetList = generateAlphabetList()

interface AlphabetKeyProps {
  alphabet: string
}

const AlphabetKey = ( { alphabet }: AlphabetKeyProps ) => {
  
  const { wordToGuess, guessedLetter, setGuessedLetter } = useWord()
  
  type KeyStatus = "clicked" | "unclicked"
  const [keyStatus, setKeyStatus] = useState<KeyStatus>("unclicked")

  function handleClickKey (): void {

    if( keyStatus === "clicked" ) return

    setGuessedLetter([...guessedLetter, alphabet])
    setKeyStatus("clicked")

    const target = document.querySelector(`#alphabet-${alphabet}`) as Element
    
    if(wordToGuess.find(letter => letter === alphabet)){
      target.classList.add("clicked", "correct")
    }
    else{
      target.classList.add("clicked", "wrong")
    }
  }

  return  <div className='alphabet-container' onClick={handleClickKey} 
          id={`alphabet-${alphabet}`} key={`alphabet-${alphabet}`}> {alphabet} </div>
}


const HangmanKeyboard = (  ) => {
  
  const { gameStatus } = useWord()

  useEffect(() => {

    function clickKeyByKeyboard(event: KeyboardEvent): void {
      const pressedKey = event.key.toUpperCase()
      if( alphabetList.includes( pressedKey ) ){
        const clickedTarget = document.querySelector(`#alphabet-${pressedKey}`) as HTMLDivElement 
        clickedTarget.click()
      }
    }
    document.addEventListener('keydown', clickKeyByKeyboard)

    // return document.removeEventListener('keydown', clickKeyByKeyboard)
  }, [])


  function handleRefresh() {
    location.reload()
  }

  if( gameStatus !== "playing" ) {
    return (
    <div>
      <div className='result'>You {gameStatus}!</div>
      <div className='refresh' onClick={handleRefresh}>{"> Refresh to play again! <"}</div>
    </div>
    )
  }

  return (
    <div className='keyboard-container'>
      {alphabetList.map( (alphabet) => {
        return <AlphabetKey alphabet={alphabet} key={`key-${alphabet}`}/>
      } )}
    </div>
  )
}

export default HangmanKeyboard
