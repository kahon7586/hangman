import './HangmanWord.css'

interface HangmanWordProps {
  word: string
}

const HangmanWord = ( { word }: HangmanWordProps ) => {

  return (
    <div className='word-container'>
      {word.toUpperCase().split("")
      .map( (letter, index) => {
        return <div key={`${letter}-${index}`} className={`letter letter-${letter}`}>{letter}</div>
      } )}
    </div>
  )
}

export default HangmanWord
