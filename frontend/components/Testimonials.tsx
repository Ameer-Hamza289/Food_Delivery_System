import Image from 'next/image'
import React from 'react'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import profile from '../assets/image.png'

const Testimonials = () => {
const testimonials=[
        {
            id:1,
            name:"Kathryn Murphy",
            image:profile,
            content:"Gravida metus sit id in aenean. Nunc odio justo amet egestas pellentesque. Est eleifend bibendum urna dictum amet nisl cursus vulputate scelerisque. Tortor id tortor nunc egestas. Vitae mi nec adipiscing volutpat. Ullamcorper semper molestie gravida elementum phasellus massa."
        },
        {
            id:2,
            name:"Kathryn Murphy",
            image:leftArrow,
            content:"Gravida metus sit id in aenean. Nunc odio justo amet egestas pellentesque. Est eleifend bibendum urna dictum amet nisl cursus vulputate scelerisque. Tortor id tortor nunc egestas. Vitae mi nec adipiscing volutpat. Ullamcorper semper molestie gravida elementum phasellus massa."
        },
        {
            id:3,
            name:"Kathryn Murphy",
            image:leftArrow,
            content:"Gravida metus sit id in aenean. Nunc odio justo amet egestas pellentesque. Est eleifend bibendum urna dictum amet nisl cursus vulputate scelerisque. Tortor id tortor nunc egestas. Vitae mi nec adipiscing volutpat. Ullamcorper semper molestie gravida elementum phasellus massa."
        },
        {
            id:4,
            name:"Kathryn Murphy",
            image:leftArrow,
            content:"Gravida metus sit id in aenean. Nunc odio justo amet egestas pellentesque. Est eleifend bibendum urna dictum amet nisl cursus vulputate scelerisque. Tortor id tortor nunc egestas. Vitae mi nec adipiscing volutpat. Ullamcorper semper molestie gravida elementum phasellus massa."
        },
    ]

    // const handleclick = () => {
    //     const swiper = new Swiper(".sliderStyle", {
    //       // ...
    //     });
    //     swiper.on("slideChange", function () {
    //       console.log("slide changed");
    //     });
    //   };
  return (
    <div className=' bg-light' style={{ paddingBlock:"80px"}}>
        <div className='container p-3'>
            <div className="d-flex py-5 justify-content-between align-items-center">
                <div className='d-flex gap-2'>
                    <Image src={leftArrow} onClick={()=>console.log("Left CLicked")} alt='' style={{ cursor:"pointer" }}/>
                    <Image src={rightArrow} alt=''onClick={()=>console.log("Right CLicked")} style={{ cursor:" pointer" }} />
                </div>
                <span className='fs-1 fw-bold'>Testimonials</span>
            </div>
            {/* <Swiper
            spaceBetween={25}
            slidesPerView={2.5}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
            {testimonials && testimonials.map((testimonial, i) => (
                <SwiperSlide  id={`testimonial-${i}`}>
                <TestimonialCard
                    id={testimonial.id}
                    name={testimonial.name}
                    image={testimonial.image}
                    content={testimonial.content}
                />
                </SwiperSlide>
            ))}
            </Swiper> */}
        </div>
        <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            cssMode={true}
            navigation={true}
            // pagination={true}
            className="sliderStyle"
            dir="ltr"
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            style={{ marginLeft:"120px"}}
            pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
            {testimonials && testimonials.map((testimonial, i) => (
                <SwiperSlide  id={`testimonial-${i}`}  >
                <TestimonialCard
                    id={testimonial.id}
                    name={testimonial.name}
                    image={testimonial.image}
                    content={testimonial.content}
                />
                </SwiperSlide>
            ))}
            </Swiper>
    </div>
  )
}

export default Testimonials
