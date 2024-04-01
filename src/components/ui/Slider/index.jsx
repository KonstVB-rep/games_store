import SkeletonSlider from 'components/Skeletons/SkeletonSlider';
import useNavigationSlider from 'hooks/useNavigationSlider';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Keyboard } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import cn from './styles.module.scss';

const Slider = ({ data, title, renderData, isLoading, titleClass = '' }) => {
    const { isEndSlides, isBeginningSlides, handleSliderChange } = useNavigationSlider();

    if (isLoading) return <SkeletonSlider />;

    if (!data?.length) return null;

    return (
        <div className={cn.slider}>
            {title && <h2 className={`${cn.slider__title} ${cn[`${titleClass}`]}`}>{title}</h2>}
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                onSlideChange={(swiper) => handleSliderChange(swiper)}
                slidesPerView={'auto'}
                spaceBetween={20}
                navigation={{
                    nextEl: `.${cn['swiper-button-next']}`,
                    prevEl: `.${cn['swiper-button-prev']}`,
                    disabledClass: `.${cn['swiper-button-disabled']}`,
                }}
                speed={500}
                modules={[Navigation, Keyboard]}
                className={cn.slider__swiper}
            >
                {renderData(data)}

                <button
                    className={`${cn['swiper-button-prev']} ${
                        isBeginningSlides
                            ? cn['swiper-button-none']
                            : data.length <= 4
                            ? cn['swiper-button-none']
                            : ''
                    }`}
                >
                    <MdArrowBackIosNew size={24} className={cn['swiper-button-icon']} />
                </button>

                <button
                    className={`${cn['swiper-button-next']} ${
                        data.length <= 4 || isEndSlides ? cn['swiper-button-none'] : ''
                    }`}
                >
                    <MdArrowForwardIos size={28} className={cn['swiper-button-icon']} />
                </button>
            </Swiper>
        </div>
    );
};

export default Slider;
