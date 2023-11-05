import React, { ForwardedRef, forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo_header.png'
import skype from '../assets/socials/Skype.svg'
import whatsApp from '../assets/socials/WhatsApp.svg'
import linkedIn from '../assets/socials/LinkedIn.svg'
import mail from '../assets/socials/Email.svg'

const Footer = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <footer className="py-5 text-white" ref={ref} style={{backgroundColor: "rgba(16,16,16,1)" }}>
      <div className="container">
        <div className="row flex-column gap-3 align-items-center">
          <div className="col-12  col-md-4 mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <Image src={logo} alt=" Logo" width={170} height={40} />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center  align-items-center">
            <ul className="nav  fs-5  justify-content-md-end">
                <Link className="nav-link" href="/contactUs">
              <li className="nav-item text-white">
                  About Us
              </li>
                </Link>
                <Link className="nav-link" href="/services">
              <li className="nav-item text-white">
                  Services
              </li>
                </Link>
                <Link className="nav-link" href="/portfolio">
              <li className="nav-item text-white">
                  Portfolio
              </li>
                </Link>
                <Link className="nav-link" href="/careers">
              <li className="nav-item text-white">
                  Careers
              </li>
                </Link>
            </ul>
          </div>
          <div className='d-flex gap-4 justify-content-center'>
            <Link href='https://www.skype.com'>
            < Image src={skype} className='' alt="Skype" width={40} height={40}/>
            </Link>
            <Link href='https://www.whatsapp.com'>
              <Image src={whatsApp} alt="whatsApp" width={40} height={40}/>
            </Link>
            <Link href=''>
              <Image src={mail} alt=" Logo" width={40} height={40}/>
            </Link>
            <Link href='https://www.linkedin.com/company/tectsoft/'>
              <Image src={linkedIn} alt=" Logo" width={40} height={40}/>
            </Link>
          </div>
          <div className='d-flex fs-5 gap-5  justify-content-center'>
            <span className='fw-normal '>University Of Development © 2023 . All rights reserved </span>
            <span>|</span>
            <span className='fw-normal'>Terms of Service</span>
            <span className='fw-normal'>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName='Footer'

export default Footer