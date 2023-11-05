import React from 'react'
import addSquare from '../assets/Add Square.svg'

const Accordian = () => {

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     }
    //   });
    // }

  return (

//     <>
//     <button className="accordion">Section 1</button>
// <div className="panel">
//   <p>Lorem ipsum...</p>
// </div>

// <button className="accordion">Section 2</button>
// <div className="panel">
//   <p>Lorem ipsum...</p>
// </div>

// <button className="accordion">Section 3</button>
// <div className="panel">
//   <p>Lorem ipsum...</p>
// </div>
//     </>



    <div className="accordion" id="accordionExample" style={{ backgroundColor:"rgba(236, 236, 255, 1)" }}>
    <div className="accordion-item" style={{ border:"none", borderBottom:"1px solid rgba(16, 16, 16, 0.2)", paddingBlock:"10px",backgroundColor:"rgba(236, 236, 255, 1)" }}>
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne" style={{ boxShadow:"none", backgroundColor:"rgba(236, 236, 255, 1)",color:"rgba(16, 16, 16, 1)", fontWeight:"600", backgroundImage:`${addSquare.src}` }}>
                Lorem ipsum dolor sit amet consectetur?
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
            </div>
        </div>
    </div>
    <div className="accordion-item " style={{ border:"none",  paddingBlock:"10px",backgroundColor:"rgba(236, 236, 255, 1)",borderBottom:"1px solid rgba(16, 16, 16, 0.2)" }}>
        <h2 className="accordion-header" >
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ boxShadow:"none", backgroundColor:"rgba(236, 236, 255, 1)",color:"rgba(16, 16, 16, 1)", fontWeight:"600" }}>
                Neque nisi vulputate a egestas in sed tellus risus?
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body"  >
            Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
            </div>
        </div>
    </div>
    <div className="accordion-item " style={{ border:"none",  paddingBlock:"10px",backgroundColor:"rgba(236, 236, 255, 1)",borderBottom:"1px solid rgba(16, 16, 16, 0.2)" }}>
        <h2 className="accordion-header" >
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ boxShadow:"none", backgroundColor:"rgba(236, 236, 255, 1)",color:"rgba(16, 16, 16, 1)", fontWeight:"600" }}>
                Neque nisi vulputate a egestas in sed tellus risus?
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body"  >
            Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
            </div>
        </div>
    </div>
    <div className="accordion-item " style={{ border:"none",  paddingBlock:"10px",backgroundColor:"rgba(236, 236, 255, 1)",borderBottom:"1px solid rgba(16, 16, 16, 0.2)" }}>
        <h2 className="accordion-header" >
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ boxShadow:"none", backgroundColor:"rgba(236, 236, 255, 1)",color:"rgba(16, 16, 16, 1)", fontWeight:"600" }}>
                Neque nisi vulputate a egestas in sed tellus risus?
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body"  >
            Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
            </div>
        </div>
    </div>
    <div className="accordion-item" style={{ border:"0px", paddingBlock:"10px", backgroundColor:"rgba(236, 236, 255, 1)" }} >
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ boxShadow:"none", backgroundColor:"rgba(236, 236, 255, 1)",color:"rgba(16, 16, 16, 1)", fontWeight:"600"}}>
                Quis ut proin nisi aliquam condimentum?
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={{ border:""}}>
            Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
            </div>
        </div>
    </div>
</div>


//     <div className="accordion" id="accordionExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingOne">
//       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//       Lorem ipsum dolor sit amet consectetur?
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//       Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingTwo">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//       Neque nisi vulputate a egestas in sed tellus risus?
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//       Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingThree">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Quis ut proin nisi aliquam condimentum?
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//       Lorem ipsum dolor sit amet consectetur. Duis mi faucibus ac consequat facilisis tortor id sed tincidunt. Nibh pulvinar bibendum eget eu sed orci orci. Rhoncus at elit est amet ipsum euismod.
//       </div>
//     </div>
//   </div>
// </div>
  )
}

export default Accordian