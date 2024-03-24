import { AnimatePresence } from 'framer-motion';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/ui/Slider';
import MotionContainer from 'components/MotionContainer';
import SkeletonRow from 'components/Skeletons/SkeletonRow';
import SkeletonSlider from 'components/Skeletons/SkeletonSlider';
import ShortCard from 'components/ui/ShortCard';

import cn from './styles.module.scss';

const Content = ({ isLoading, description, games }) => {
    return (
        <>
            {isLoading ? (
                <>
                    <SkeletonRow
                        property={{
                            marginTop: '20px',
                            height: '260px',
                        }}
                    />
                    <SkeletonSlider />
                </>
            ) : (
                <>
                    <AnimatePresence>
                        {description && (
                            <div className={cn.description}>
                                <MotionContainer>
                                    {description
                                        ?.slice(3, -4)
                                        .replaceAll('&#39;', "'")
                                        .replaceAll('<br />', '"')}
                                </MotionContainer>
                            </div>
                        )}
                    </AnimatePresence>

                    <Slider
                        data={games}
                        title="games of the genre"
                        renderdata={(data) =>
                            data?.map((game) => (
                                <SwiperSlide
                                    key={game.id}
                                    style={{ maxWidth: '270px', textAlign: 'center' }}
                                >
                                    <ShortCard game={{ ...game }} isCanBuy={false} />
                                </SwiperSlide>
                            ))
                        }
                    />
                </>
            )}
        </>
    );
};

export default Content;
