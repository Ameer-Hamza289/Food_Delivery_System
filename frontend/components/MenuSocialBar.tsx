import React from 'react'
import instagram from '../assets/menu icons/socials/Instagram.svg'
import Twitter from '../assets/menu icons/socials/Twitter.svg'
import LinkedIn from '../assets/menu icons/socials/LinkedIn.svg'
import facebook from '../assets/menu icons/socials/Facebook.svg'
import Image from 'next/image'
import Link from 'next/link'

const MenuSocialBar = () => {

    const icons=[
        {
            icon:instagram,
            link:"https://www.instagram.com/"
        },
        {
            icon:facebook,
            link:"https://facebook.com/"
        },
        {
            icon:Twitter,
            link:"https://twitter.com/"
        },
        {
            icon:LinkedIn,
            link:"https://linkedin.com/"
        },
    ]

  return (
    <div className=' mt-5'>
        <div className='row '>
            <div className="col-8">
                <hr />
            </div>
            <div className="col-3">
                <span className=' flex-item fw-bold fs-3'>Social</span>
            </div>
        </div>
            <div className='d-flex gap-3 justify-content-end mt-2 '>
                {icons && icons.map((item)=>(
                    <>
                        <Link href={item.link}>
                            <Image src={item.icon} alt='socail icon' width={48}/>
                        </Link>
                    </>
                ))}
            </div>
    </div>
  )
}

export default MenuSocialBar