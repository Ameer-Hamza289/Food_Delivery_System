import React from 'react'
import Accordian from './Accordian'


const FAQ = () => {
  return (
    <div className='' style={{ backgroundColor:"rgba(236, 236, 255, 1)" }}>
      <div className='container  ' style={{ paddingBlock:"100px", paddingInline:"60px" }}>
        <p className='fw-bold fs-1 text-center mb-5' style={{ color:"rgba(16, 16, 16, 1)" }}>FAQ</p>
        <Accordian/>
      </div>
    </div>
  )
}

export default FAQ