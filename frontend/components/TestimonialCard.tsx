import Image from 'next/image'
import React, { FC } from 'react'
import quote from '../assets/quote-down.svg'

interface cardProps{
    id: number | string
    name: string
    image: any
    content: string
}
const TestimonialCard:FC<cardProps> = ({id,name,image,content}):JSX.Element => {
  return (
    <div className='p-4 bg-white' >
        <div className="d-flex gap-3">
            <Image src={quote} width={30} alt='quotation down'/>
            <div>
                <p>{content}</p>
                <div className="d-flex gap-3 align-items-center">
                    <Image src={image} alt='profile' width={60} className='' style={{ objectFit:"contain", objectPosition:"center", borderRadius:"50%" }}/>
                    <span className='' style={{ fontWeight:"600"}}>{name}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard