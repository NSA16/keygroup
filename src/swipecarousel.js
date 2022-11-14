import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

import 'bootstrap/dist/css/bootstrap.min.css';

const HouseSlider = () => {
    return (
        <div className="container py-4 px-4 justify-content-center">
            <Swiper
                freemode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={4}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <h1>Slide 1</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 3</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 4</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 5</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 6</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 7</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 8</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 9</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 10</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HouseSlider;