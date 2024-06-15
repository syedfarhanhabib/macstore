import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import SwiperSlide from 'swiper/react'
import 'swiper/css';
import Image from 'next/image';
import { cardData } from '@/lib/data';
// import SwiperCore from 'swiper'; // Import SwiperCore

export default function SwiperSection() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
        >
            <SwiperSlide className=''>
                {cardData.map((item, index) => (
                    <div
                        className="relative text-zinc-950 w-1/3 h-dvh flex-shrink-0 overflow-hidden p-5 rounded-3xl"
                        key={index}
                    >
                        <h2>{item.title}</h2>
                        <p className='text-4xl font-medium' >{item.description}</p>
                        <Image src={item.img} alt='' fill className='z-[-1] w-full h-full absolute left-0 bottom-0 object-cover' />
                    </div>
                ))}
            </SwiperSlide>
        </Swiper>
    );
}