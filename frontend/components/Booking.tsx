import React from 'react'
import ConsultButton from './ConsultButton'
import backImage from '../assets/CTA.png'
import Image from 'next/image'


const Booking = () => {
  return (

    <div className=' text-white booking ' style={{  backgroundImage:`url(${backImage.src})`  }}>
        <div className='h-100' style={{ backgroundColor:"rgba(30,31,67,0.9)", paddingBlock:"50px" }}>
            <div className="container d-flex align-items-center justify-content-between py-5">
                <div className=' d-flex flex-column gap-3' style={{ maxWidth:"500px"}}>
                    <span className='fw-bold fs-2'>Let&apos;s make something amazing together </span>
                    <p className='m-0 lh-base'>Turpis commodo eget pharetra enim morbi velit eu. Risus quam purus tortor pretium. </p>
                </div>
                <div className=''>
                    <ConsultButton/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking