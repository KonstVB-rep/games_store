import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import cn from './styles.module.scss';


const Slider = ({ genres, setActiveSlide }) => {
    return (
        <Swiper
            scrollbar={{
                el: `.${cn['swiper-scrollbar']}`,
                draggable: true,
                // hide: true,
                dragClass: `${cn['swiper-scrollbar-drag']}`,
                snapOnRelease: true,
            }}
            parallax={true}
            keyboard={{ enabled: true, onlyInViewport: false, pageUpDown: true }}
            modules={[Scrollbar, Keyboard]}
            className={cn.swiper}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSlideChange={(e) => setActiveSlide(e.realIndex)}
            // autoplay={{ delay: 5000 }}
        >
            {genres?.map((item, index) => (
                <SwiperSlide key={index} className={cn['swiper-slide']}>
                    <div
                        className={`${cn['swiper-bg']} parallax-bg`}
                        // data-swiper-parallax="-23%"
                    >
                        <img src={item?.image_background} alt="" loading="lazy" />

                        <h2 className={cn['swiper-bg__title']} data-swiper-parallax={'-100'}>
                            {item?.name}
                        </h2>
                    </div>
                </SwiperSlide>
            ))}
            
            <div className={cn['swiper-scrollbar']}>
                <div className={cn['swiper-scrollbar-drag']}></div>
            </div>
        </Swiper>
    );
};

export default Slider;
