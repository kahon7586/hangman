import { useState } from 'react'
import './App.css'
import wordList from './Data/wordList.json'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import HangmanKeyboard from './Components/HangmanWord'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomWord = wordList[ Math.floor(Math.random() * wordList.length) ]
    return randomWord
  })

  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  return (
    <div className='interface'>
      <div className='result'>Lose Win</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <HangmanKeyboard/>
    </div>
  )
}

export default App
