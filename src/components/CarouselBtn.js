import React from 'react'
import "./CarouselBtn.css"

const CarouselBtn = ({btnText,handleCrousel,bdCol="#FFE1E1",col="#F36F2B"}) => {

  return <button className='carouselBtn' style={{border:`1px solid ${bdCol}`,color:`${col}`}} onClick={()=>{handleCrousel(btnText)}}>{btnText}</button>
}

export default CarouselBtn