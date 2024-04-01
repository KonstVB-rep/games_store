import React from 'react';

import MotionContainer from 'components/MotionContainer';
import SkeletonRow from 'components/Skeletons/SkeletonRow';
import ShortCard from 'components/ui/ShortCard';
import Slider from 'components/ui/Slider';
import { AnimatePresence } from 'framer-motion';
import { SwiperSlide } from 'swiper/react';

import cn from './styles.module.scss';

const Content = ({ isLoading, description, games }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonRow
                    property={{
                        marginTop: '20px',
                        height: '260px',
                    }}
                />
            ) : (
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
            )}

            <Slider
                data={games}
                isLoading={isLoading}
                title="games of the genre"
                renderData={(data) =>
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
    );
};

export default Content;
