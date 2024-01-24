import { useEffect } from 'react'
import { useWord } from '../Context/useWord'
import './HangmanDrawing.css'
import { useUpdateEffect } from '../Utils/useUpdateEffect'


const HangmanDrawing = () => {

  const HUMAN_PARTS = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"]

  const { guessWrongTime } = useWord()

  useUpdateEffect(( )=> {

    if(guessWrongTime === 0) return

    const target = document.querySelector("#" + HUMAN_PARTS[ guessWrongTime - 1 ] ) as Element
    
    target.classList.remove("hide")


  }, [guessWrongTime])



  return (
    <div className='drawing-container'>
      <div className="top">
        <div className="drop">
          <div className="head hide" id='head'>
            <div className="body hide" id='body'>
              <div className="left-arm hide" id="left-arm"></div>
              <div className="right-arm hide" id="right-arm"></div>
              <div className="left-leg hide" id="left-leg"></div>
              <div className="right-leg hide" id="right-leg"></div>
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



