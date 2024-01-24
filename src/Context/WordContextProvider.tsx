import { ReactNode, useState } from "react"
import wordList from '../Data/wordList.json'
import { WordContext, wordContext } from "./useWord"
import { useUpdateEffect } from "../Utils/useUpdateEffect"
import { GameStatus } from "./useWord"

interface WordContextProviderProps {
  children: ReactNode
}

const WordContextProvider = ( {children}: WordContextProviderProps ) => {

  const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
  
  const [wordToGuess, setWordToGuess] = useState<string[]>(() => {
    const randomWord = wordList[ Math.floor(Math.random() * wordList.length) ]
    const wordToGuessList = randomWord.toUpperCase().split("")
    return wordToGuessList
  })

  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  const [guessWrongTime, setGuessWrongTime] = useState<number>(0)

  useUpdateEffect(() => {
    console.log(guessedLetter)
  },[guessedLetter])

  useUpdateEffect(() => {

    console.log('You wrong ' + guessWrongTime + ' time.')

    if(guessWrongTime === 6){
      setGameStatus("lose")
      console.log('gameover')
    }
  }, [guessWrongTime])

  const contextValue: WordContext = {
    gameStatus, 
    setGameStatus,
    wordToGuess,
    guessedLetter,
    setGuessedLetter,
    guessWrongTime,
    setGuessWrongTime,
  }

  return (
    <wordContext.Provider value={contextValue}>
      {children}
    </wordContext.Provider>
  )
}

export default WordContextProvider
