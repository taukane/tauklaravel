import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Contact() {
    const { auth } = usePage<SharedData>().props;
	return (
		<>
			<div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <Swiper className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                </div>
			</div>
		</>
	)
}