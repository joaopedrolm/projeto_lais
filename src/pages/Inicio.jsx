import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from "react";
import { ListagemModulos } from '../components/ListagemModulos';
import { ParceirosInicio } from '../components/ParceirosInicio';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Inicio() {

    return (
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 10000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-rows-1 justify-center items-center'>
                        <img className='slide1' src='slide1.png'>
                        </img>
                        
                        <div className='flex flex-col justify-center items-center filtro'>
                            <img className='' src='lais2.svg' width="400rem"></img>
                            <img className='my-6' src='linha.svg' width="115rem"></img>
                            <img className='' src='subtitulo.svg' width="500rem"></img>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-rows-1 justify-center items-center slide2'>
                        <div className='flex flex-col justify-center items-center filtro'>
                            <img className='' src='lais2.svg' width="400rem"></img>
                            <img className='my-6' src='linha.svg' width="115rem"></img>
                            <img className='' src='subtitulo.svg' width="500rem"></img>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-rows-1 justify-center items-center slide3'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='' src='lais2.svg' width="400rem"></img>
                            <img className='my-6' src='linha.svg' width="115rem"></img>
                            <img className='' src='subtitulo.svg' width="500rem"></img>
                        </div>        
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <ListagemModulos></ListagemModulos>

            <ParceirosInicio></ParceirosInicio>    

        </div>
    )
}