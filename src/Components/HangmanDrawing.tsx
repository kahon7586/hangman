import './HangmanDrawing.css'


const HangmanDrawing = () => {
  return (
    <div className='drawing-container'>
      <div className="top">
        <div className="drop">
          <div className="head">
            <div className="body">
              <div className="left-hand"></div>
              <div className="right-hand"></div>
              <div className="left-leg"></div>
              <div className="right-leg"></div>
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
