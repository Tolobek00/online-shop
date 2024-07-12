import React from 'react'

import sesrvice from "../../Assets/Svg/Services.svg"
import sesrvice1 from "../../Assets/Svg/Services (1).svg"
import sesrvice2 from "../../Assets/Svg/Services (2).svg"
import sesrvice3 from "../../Assets/Svg/Services (3).svg"

import "./raiting.scss"

function Raiting() {
  return (
    <div className='container'>
      <div className='blog'>
        <img src={sesrvice} alt="" />
        <h1></h1>
        <p></p>
      </div>
      <div className='blog'>
        <img src={sesrvice1} alt="" />
        <h1></h1>
        <p></p>
      </div>
      <div className='blog'>
        <img src={sesrvice2} alt="" />
        <h1></h1>
        <p></p>
      </div>
      <div className='blog'>
        <img src={sesrvice3} alt="" />
        <h1></h1>
        <p></p>
      </div>
    </div>
  )
}

export default Raiting
