import React from 'react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import cn from './styles.module.scss';

const Slider = ({ genres, setActiveSlide, ...props }) => {
    return (
        <Swiper
            scrollbar={{
                el: `.${cn['swiper-scrollbar']}`,
                draggable: true,
                dragClass: `${cn['swiper-scrollbar-drag']}`,
                snapOnRelease: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: false, pageUpDown: true }}
            modules={[Scrollbar, Keyboard]}
            className={cn.swiper}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSlideChange={(e) => setActiveSlide(e.realIndex)}
            {...props}
        >
            {genres?.map((item, index) => (
                <SwiperSlide key={index} className={cn['swiper-slide']}>
                    <div className={cn['swiper-bg']}>
                        <img src={item?.image_background} alt="" loading="lazy" />

                        <h2 className={cn['swiper-bg__title']}>{item?.name}</h2>
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
