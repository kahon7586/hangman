import './App.css'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import HangmanKeyboard from './Components/HangmanKeyboard'
import WordContextProvider from './Context/WordContextProvider'
import { useWord } from './Context/useWord'
import { useEffect, useState } from 'react'

function App() {

  return (
    <WordContextProvider>
      <div className='interface'>
        Word Guess
        <HangmanDrawing/>
        <HangmanWord />
        <HangmanKeyboard />
      </div>
    </WordContextProvider>
  )
}

export default App
