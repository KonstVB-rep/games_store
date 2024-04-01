import React from 'react';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

import { Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import cn from './styles.module.scss';

const Slider = ({ data }) => {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: false, pageUpDown: true }}
            modules={[Pagination, Keyboard]}
            className={cn.swiper}
        >
            {data?.map((item, index) => (
                <SwiperSlide key={index} className={cn['swiper-slide']}>
                    <div className={cn['swiper-bg']}>
                        <img src={item?.img} alt="" loading="lazy" />

                        <div className={cn['swiper-bg__content']}>
                            <h2 className={cn['swiper-bg__title']}>{item?.title}</h2>
                            <p className={cn['swiper-bg__describe']}>{item?.describe}</p>
                            <Link to={`/games/${item?.id}`} className={cn['swiper-bg__link']}>
                                Read more
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
