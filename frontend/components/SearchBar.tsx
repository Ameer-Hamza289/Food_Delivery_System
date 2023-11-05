import React, { useState } from "react";
import Image from "next/image"

import searchIcon from '../assets/magnifyingglass.svg'
import filter from '../assets/filter.svg'


const SearchBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-1 mt-4">
      <div className="position-relative" style={{ width: '79%' }}>
        <Image src={searchIcon} alt="" className='position-absolute ms-2' style={{ top: "30%", left: '10px' }} />
        <input className='border-0 ps-5 w-100' placeholder="Search job"  style={{ height: "50px",  backgroundColor: "rgba(30, 30, 30, 0.1)" }}  />
      </div>

      <div className='d-flex ' style={{ width: '20%' }}>
        {/* <div className="d-none d-md-flex justify-content-center align-items-center  text-opacity-50" style={{ paddingBlock: "13px", width: "60%",  backgroundColor: "rgba(30, 30, 30, 0.1)", color:"grey" }}>
          {`Sort by`}
          <Image className='ms-2 mt-1' src={Right} alt="" />
        </div> */}

        <div className='d-none d-md-block  text-center' style={{ paddingBlock: "13px", width: "35%",  backgroundColor: "rgba(30, 30, 30, 0.1)" }}>
          <Image src={filter} alt="" />
        </div>
        <div className='d-block d-md-none w-100  text-center' style={{ paddingBlock: "13px",  backgroundColor: "rgba(30, 30, 30, 0.1)" }}>
          <Image src={filter} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar