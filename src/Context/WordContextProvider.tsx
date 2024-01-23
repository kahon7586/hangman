import { ReactNode, useEffect, useState } from "react"
import wordList from '../Data/wordList.json'
import { WordContext, wordContext } from "./useWord"

interface WordContextProviderProps {
  children: ReactNode
}


const WordContextProvider = ( {children}: WordContextProviderProps ) => {

  
  const [wordToGuess, setWordToGuess] = useState<string[]>(() => {
    const randomWord = wordList[ Math.floor(Math.random() * wordList.length) ]
    const wordToGuessList = randomWord.toUpperCase().split("")
    return wordToGuessList
  })

  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  useEffect(() => {
    console.log(guessedLetter)
  })

  const contextValue: WordContext = {
    wordToGuess,
    guessedLetter,
    setGuessedLetter,
  }

  return (
    <wordContext.Provider value={contextValue}>
      {children}
    </wordContext.Provider>
  )
}

export default WordContextProvider
