import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo_header.png'
import hand from '../assets/menu icons/Hand Stars.svg'
import smartphone from '../assets/menu icons/Monitor Smartphone.svg'
import Case from '../assets/menu icons/Case.svg'
import mail from '../assets/menu icons/Mailbox.svg'
import MenuSocialBar from './MenuSocialBar'
import Link from 'next/link'


 const Menu = () => {
    const items=[
        {
            title:"Login",
            icon:hand,
            backgroundColor:"rgba(16,16,16,1)",
            link:"/login"
        },
        {
            title:"Departments",
            icon:smartphone,
            backgroundColor:"rgba(16,16,16,1)",
            link:"/departments"
        },
        {
            title:"Careers",
            icon:Case,
            backgroundColor:"rgba(16,16,16,1)",
            link:"/careers"
        },
        {
            title:"Contact Us",
            icon:mail,
            backgroundColor:"rgba(67, 83, 255, 1)",
            link:"/contactUs"
        },
    ]
  return (
    <div className="offcanvas offcanvas-end p-4" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
  <div className="offcanvas-header">
  <Image src={logo} width={170} alt="Site Logo"  className="d-inline-block align-text-top" />
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className='row px-0  p-4 justify-content-between'>
        {items && items.map((card,i)=>(
            <div className='col-6 p-2' key={i}>
                <Link href={card.link} className=' text-decoration-none'>
                    <div className='w-100  h-100 p-4 text-white' style={{ backgroundColor:`${card.backgroundColor}` }}>
                        <Image src={card.icon} alt='Services icon' width={30}/>
                        <p className='mb-0 mt-3'>{card.title}</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    <MenuSocialBar/>
  </div>
</div>
  )
}

export default Menu