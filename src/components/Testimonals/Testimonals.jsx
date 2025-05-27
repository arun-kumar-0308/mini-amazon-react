import React from 'react'
import './Testimonals.css';
import Hero from "../../assets/testimonialHero.png";
import {TestimonialsData} from "../../data/testimonials";
import {Swiper, SwiperSlide} from "swiper/react";
function Testimonals() {
    return (
        <>
            <div className='testimonials'>
                <div className="wrapper">
                    <div className="container">
                        <span>Top Rated</span>
                        <span>
                            Seedily say has  suitabledisposal and by Exercise joy man children rejoiced.
                        </span>
                    </div>


                    <img src={Hero} alt="" />
                    <div className="container">
                        <span>100K</span>
                        <span>Happy Customers with us</span>
                    </div>
                </div>

                <div className="reviews">
                    Reviews
                </div>

                <div className="carousel">
                    <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    // className={tCarousel}
                    breakpoints={{
                        856:{
                            slidesPerView: 3
                        },
                        640:{
                            slidesPerView: 2
                        },
                        0:{
                            slidesPerView: 1
                        }
                    }}
                    > 
                        {
                        TestimonialsData.map((testimonial, i)=>(
                            <SwiperSlide >
                                <div className="testimonial">
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr/>
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        )
                        )
                        }
                    </Swiper>
                </div>



            </div>
        </>
    )
}

export default Testimonals