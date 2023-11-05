import React from 'react'
import mobile from '../assets/ContactIcons/Mobile.svg'
import desktop from '../assets/ContactIcons/Desktop.svg'
import Image from 'next/image'

const ContactForm = () => {
  return (
    // <div className='' >
        <form action="">
            <label className='form-label' htmlFor="Name">Name <span >*</span></label>
            <input className='form-control rounded-0' type="text"required placeholder='Name' style={{ backgroundColor:"rgba(16, 16, 16, 0.1)"}} />
            <label htmlFor="Email" className='mt-4'>Email <span >*</span></label>
            <input className='form-control rounded-0 mt-2' type="text"required placeholder='Email' style={{ backgroundColor:"rgba(16, 16, 16, 0.1)"}} />
            <label htmlFor="Select" className='mt-4'>Select Project</label>
            <div className='d-flex gap-3 mt-2'>
                <div className='d-flex align-items-center gap-2'>
                    <Image src={desktop} alt=""/>
                    <span>Web</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Image src={mobile} alt=""/>
                    <span>Web</span>
                </div>
            </div>
            <label htmlFor="Message" className='mt-4'> Message</label>
            <textarea className='form-control rounded-0 mt-2' placeholder='Message' name="message" id="message" cols={30} rows={7} style={{ backgroundColor:"rgba(16, 16, 16, 0.1)" }}></textarea>
            <button className='btn text-white btn-primary rounded-0' style={{ color:"rgba(67, 83, 255, 1)",paddingBlock:"15px", paddingInline:"80px",marginTop:"35px" }} >Send</button>
        </form>
    // </div>
  )
}

export default ContactForm