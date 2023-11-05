import React from 'react'
import team from '../assets/SVGs/Mi5wbmc.svg'
import consult from '../assets/SVGs/NC5wbmc.svg'
import manage from '../assets/SVGs/OS5wbmc.svg'
import star from '../assets/SVGs/My5wbmc.svg'
import Image from 'next/image'

const ChooseUs = () => {
  const points=[
    {
      point:"Professional Team",
      icon:team
    },
    {
      point:"Free Consultation",
      icon:consult
    },
    {
      point:"Good Time Management",
      icon:manage
    },
    {
      point:"Quality Oriented",
      icon:star
    },
  ]

  return (
    <div className='container my-3'>
       <h1 className='d-flex justify-content-center fw-bold'>Why Choose Us?</h1> 
       <p className='text-center mb-3' style={{ color: "rgba(16, 16, 16, 0.5)"}}>Lorem ipsum dolor sit amet consectetur. Tortor orci massa tristique magna feugiat lorem eleifend vitae habitant.</p>
       <div className='row px-0 mt-5 justify-content-between'>
        {points && points.map((card,i)=>(
            <div className='col-6 p-3' key={i}>
                    <div className=' d-flex w-100 px-5 h-100  justify-content-center gap-4 ' style={{ backgroundColor:"rgba(236, 236, 255, 1)", paddingBlock:"50px" }}>
                        <Image src={card.icon} alt='icons' width={120}/>
                        <div className='d-flex align-items-center'>
                          <p className='mb-0  fw-bold fs-2 ' >{card.point}</p>
                        </div>
                    </div>
            </div>
        ))}
    </div> 
    </div>
  )
}

export default ChooseUs
