import { useState } from 'react'
import './App.css'
import wordList from './Data/wordList.json'
import { getRandomNum } from './Utils/getRandomNum'

function App() {

  const [wordToGuess, setWordToGuess] = useState( wordList[getRandomNum(0, wordList.length)] )

  return (
    <>
      test
    </>
  )
}

export default App
