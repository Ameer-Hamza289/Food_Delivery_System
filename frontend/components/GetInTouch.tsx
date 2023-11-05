import React from 'react'
import insta from '../assets/ContactIcons/Instagram.svg'
import fb from '../assets/ContactIcons/Facebook.svg'
import twitter from '../assets/ContactIcons/Twitter.svg'
import linkedIn from '../assets/ContactIcons/LinkedIn.svg'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'

const GetInTouch = () => {
    const Icons=[
        {
            icon:insta,
            link:'https://www.instagram.com/'
        },
        {
            icon:fb,
            link:'https://www.facebook.com/'
        },
        {
            icon:twitter,
            link:'https://www.twitter.com/'
        },
        {
            icon:linkedIn,
            link:'https://www.linkedin.com/'
        },
    ]
  return (
    <div className='' style={{ paddingBlock:"70px" }}>
        <div className='container p-5' style={{ boxShadow:"1px 1px 3px 0px" }}>
           <div className=' d-flex justify-content-between mb-5'>
                <span className='fs-2 fw-bold '>Get in touch</span>
                <div>
                    {Icons && Icons.map((item)=>(
                        <Link href={item.link}>
                            <Image src={item.icon} alt='social icon'/>
                        </Link>
                    ))}
                </div>
           </div>
           <ContactForm/>
        </div>
    </div>
  )
}

export default GetInTouch