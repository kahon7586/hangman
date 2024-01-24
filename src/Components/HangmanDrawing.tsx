import { useEffect } from 'react'
import { useWord } from '../Context/useWord'
import './HangmanDrawing.css'


const HangmanDrawing = () => {

  const HUMAN_PARTS = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"]

  const { guessWrongTime } = useWord()



  return (
    <div className='drawing-container'>
      <div className="top">
        <div className="drop">
          <div className="head hide">
            <div className="body hide">
              <div className="left-arm hide"></div>
              <div className="right-arm hide"></div>
              <div className="left-leg hide"></div>
              <div className="right-leg hide"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rod"></div>
      <div className="floor"></div>
    </div>
  )
}

export default HangmanDrawing


