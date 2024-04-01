import React from 'react';
import { useState } from 'react';

import useNavigationSlider from 'hooks/useNavigationSlider';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import cn from './styles.module.scss';

const SliderPoster = ({ screenShots }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { isEndSlides, isBeginningSlides, handleSliderChange } = useNavigationSlider();

    return (
        <div className={cn['sliders-container']}>
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                className={cn['swiper-main']}
                keyboard={{ enabled: true, onlyInViewport: false, pageUpDown: true }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    handleSliderChange(swiper);
                }}
                navigation={{
                    nextEl: `.${cn['swiper-button-next-screenshot']}`,
                    prevEl: `.${cn['swiper-button-prev-screenshot']}`,
                }}
            >
                {screenShots.map((item, index) => (
                    <SwiperSlide key={index} className={cn['swiper-slide']}>
                        <img src={item.image} loading="lazy" alt="" />
                    </SwiperSlide>
                ))}

                <button
                    className={`${cn['swiper-button-prev-screenshot']} ${
                        isBeginningSlides ? cn['swiper-button-none'] : ''
                    }`}
                >
                    <MdArrowBackIosNew size={24} className={cn['swiper-button-icon']} />
                </button>

                <button
                    className={`${cn['swiper-button-next-screenshot']} ${
                        isEndSlides ? cn['swiper-button-none'] : ''
                    }`}
                >
                    <MdArrowForwardIos size={28} className={cn['swiper-button-icon']} />
                </button>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    handleSliderChange(swiper);
                }}
                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                className={cn['swiper-thumbs']}
            >
                {screenShots.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={`${cn['swiper-slide']} ${
                            index === activeIndex ? cn['swiper-slide-thumb-active'] : ''
                        }`}
                    >
                        <img src={item.image} loading="lazy" alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderPoster;
