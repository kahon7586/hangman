import { createContext, useContext } from "react";

export type GameStatus = "playing" | "win" | "lose"

export interface WordContext {
  gameStatus: string, 
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>,
  wordToGuess: string[],
  guessedLetter: string[],
  setGuessedLetter: React.Dispatch<React.SetStateAction<string[]>>
  guessWrongTime: number
  setGuessWrongTime: React.Dispatch<React.SetStateAction<number>>
}

export const wordContext = createContext({} as WordContext)

export function useWord() {
  return useContext(wordContext)
}