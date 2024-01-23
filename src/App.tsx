import './App.css'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import HangmanKeyboard from './Components/HangmanKeyboard'
import WordContextProvider from './Context/WordContextProvider'
import { useWord } from './Context/useWord'

function App() {

  return (
    <WordContextProvider>
      <div className='interface'>
        <div className='result'>Lose Win</div>
        <HangmanDrawing/>
        <HangmanWord />
        <HangmanKeyboard />
      </div>
    </WordContextProvider>
  )
}

export default App
