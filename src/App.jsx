import { useState } from 'react'
import './App.scss'
import images from './utils/images'

function App() {
  const [slider, setSlider] = useState(0)

  const style = {
    width: 600,
    height: 400

  }

  const nextSlider = () => {
    if (slider < (images.length * style.width) - style.width) {
      setSlider(slider + style.width)
    }
  }
  const backSlider = () => {
    if (slider > 0) {
      setSlider(slider - style.width)
    }
  }
  return (
    <div className="App">
      <div style={{ width: `${style.width}px` }} className='slider-container'>
        <button onClick={backSlider} className='button button-rigth'>&lt;</button>
        <div style={{ transform: `translateX(-${slider}px)` }} className='slider'>
          {
            images?.map(img => (
              <img key={img.number} style={{ height: `${style.height}px`, width:`${style.width}px` }} className='slider_item' src={img.img} alt="img" />
            ))
          }
        </div>
        <button onClick={nextSlider} className='button button-left'>&gt;</button>
      </div>
    </div>
  )
}

export default App
