import { Keyboard, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';

import cn from './styles.module.scss';

const SwiperGenres = ({ genres }) => {
    return (
        <Swiper
            scrollbar={{
                el: `.${cn['swiper-scrollbar']}`,
                draggable: true,
                hide: true,
                dragClass: `${cn['swiper-scrollbar-drag']}`,
                snapOnRelease: true,
            }}
            parallax={true}
            keyboard={{ enabled: true, onlyInViewport: false, pageUpDown: true }}
            modules={[Scrollbar, Keyboard]}
            className={cn.swiper}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            // autoplay={{ delay: 3000 }}
        >
            {genres?.map((item, index) => (
                <SwiperSlide key={index}>
                    <div
                        className={`${cn['swiper-bg']} parallax-bg`}
                        // style={{
                        //     background: `url(${item.image_background}) center center/cover no-repeat`,
                        // }}
                        // data-swiper-parallax="-23%"
                    >
                        <img src={item.image_background} alt="" loading="lazy" />
                    </div>

                    <div className={cn['swiper-content']}>
                        <h2 className="title" data-swiper-parallax={'-100'}>
                            {item.name}
                        </h2>

                        <div className="subtitle" data-swiper-parallax={'-200'}>
                            Subtitle
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            <div className={cn['swiper-scrollbar']}>
                <div className={cn['swiper-scrollbar-drag']}></div>
            </div>
        </Swiper>
    );
};

export default SwiperGenres;
