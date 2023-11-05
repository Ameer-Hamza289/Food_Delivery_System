import logo from '../assets/logo_header.png'
import skype from '../assets/socials/Skype.svg'
import whatsApp from '../assets/socials/WhatsApp.svg'
import linkedIn from '../assets/socials/LinkedIn.svg'
import mail from '../assets/socials/Email.svg'
import phone from '../assets/socials/Phone.svg'
import menu from '../assets/socials/menu.svg'

import Image from 'next/image'
import Link from 'next/link'
import React, { ForwardedRef, forwardRef } from 'react'

const Navbar = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  
  return (
    <nav className="navbar navbar-expand-lg py-4 " ref={ref} style={{ backgroundColor: "rgba( 16, 16, 16, 1)" }}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={logo} width={170} alt="Site Logo"  className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          <Image src={menu} width={40} alt="Site Logo"  className="d-inline-block align-text-top" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Link className="navbar-brand" href="/">
              <li className="nav-item d-flex align-items-center">
                <Image src={linkedIn} alt="Site Icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link> 
            <Link className="navbar-brand" href="/">
              <li className="nav-item d-flex align-items-center">
                <Image src={skype} alt="Site Icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link>
            <Link className="navbar-brand" href="/">
              <li className="nav-item d-flex align-items-center">
                <Image src={whatsApp} alt="Site Icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link>
            <Link className="navbar-brand" href="/">
              <li className="nav-item d-flex align-items-center">
                <Image src={phone} alt="Site Icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link>
            <Link className="navbar-brand" href="/">
              <li className="nav-item d-flex align-items-center">
                <Image src={mail} alt="Site Icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link>
            <Link className="navbar-brand" href="">
              <li className="nav-item d-flex align-items-center pe-auto">
                <Image src={menu} data-bs-toggle="offcanvas" data-bs-target="#offcanvas" alt="bar icon" width={40}  className="d-inline-block align-text-top " />
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </nav>
    
  )
})

Navbar.displayName='Navbar'
export default Navbar