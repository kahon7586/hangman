import { createContext, useContext } from "react";

export interface WordContext {
  wordToGuess: string[],
  guessedLetter: string[],
  setGuessedLetter: React.Dispatch<React.SetStateAction<string[]>>
}

export const wordContext = createContext({} as WordContext)

export function useWord() {
  return useContext(wordContext)
}