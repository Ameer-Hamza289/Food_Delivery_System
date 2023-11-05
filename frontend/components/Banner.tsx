import React from 'react'

const Banner = () => {
  return (
        <div className="py-5 container text-white mb-4" style={{ backgroundColor: "rgba(16,16,16,1)", transform: "translate(0px,-60px)",paddingBlock:"40px"  }}>
          <div className="row " style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div className='col-3 align-items-center justify-content-center gap-3 p-4' style={{ paddingInline:"40px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                        <span className='fs-1 fw-bolder' style={{ color: "rgba(255, 204, 0, 1)" }}>20+</span>
                        <p>Years Experience</p>       
            </div>
            <div className="col-1" style={{ height:"70px",width:"2px", borderLeft:"1px solid white" }}/>
            <div className='col-3 align-items-center gap-3 p-4'  style={{ paddingInline:"40px", display:"flex",flexDirection:"column", justifyContent:"center" }}>
                <span className='fs-1 fw-bold' style={{ color: "rgba(255, 204, 0, 1)"}}>1,000+</span>
                <p>Projects Completed</p>
            </div>
            <div className="col-1" style={{ height:"70px",width:"2px", borderRight:"1px solid white" }}/>
            <div className='col-3 align-items-center gap-3 p-4'   style={{ paddingInline:"40px", display:"flex",flexDirection:"column", justifyContent:"center" }}>
                <span className='fs-1 fw-bolder' style={{ color: "rgba(255, 204, 0, 1)"}}>1,000+</span>
                <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
  )
}

export default Banner