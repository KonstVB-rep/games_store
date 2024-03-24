import React, { useEffect, useState } from 'react';
import { useAsyncValue } from 'react-router-dom';

import FavoriteIcon from '../../ui/icons/FavoriteIcon';
import Content from '../Content';
import PlatformsLIst from '../PlatformsLIst';
import Poster from '../Poster';
import { getData } from 'api/getData';
import { PATH } from 'constants/api';
import { transformData } from 'utils/transformData';
import { SwiperSlide } from 'swiper/react';
import ShortCard from 'components/ui/ShortCard';
import Slider from '../../ui/Slider';
import SliderPoster from '../SliderPoster';

import 'swiper/css';
import cn from './styles.module.scss';

const getGameSeries = (id) => {
    return getData(PATH.GAME_SERIES(id), transformData);
};

const getScreenshots = (id) => {
    return getData(PATH.GAME_SCREENSHOTS(id));
};

const GameDetails = () => {
    const game = useAsyncValue();

    const [gameSeries, setGameSeries] = useState([]);
    const [screenShots, setScreenShots] = useState([]);

    useEffect(() => {
        getGameSeries(game.id).then((res) => setGameSeries(res));
        getScreenshots(game.id).then((res) => {
            res.unshift({ image: game.img });
            setScreenShots(res);
        });

        return () => {
            setGameSeries([]);
            setScreenShots([]);
        };
    }, [game?.id, game.img]);

    return (
        <>
            <article className={cn.section}>
                <h1 className={cn.title}>{game.name}</h1>

                <FavoriteIcon game={game} />

                {screenShots.length < 2 ? (
                    <Poster img={game.img} />
                ) : (
                    <SliderPoster screenShots={screenShots} />
                )}

                <PlatformsLIst
                    platforms={game.platforms}
                    reddit={game.reddit}
                    website={game.website}
                />
                <Content game={game} />
            </article>

            <Slider
                data={gameSeries}
                title="Game Series"
                renderdata={(data) =>
                    data?.map((game) => (
                        <SwiperSlide
                            key={game.id}
                            style={{ maxWidth: '270px', textAlign: 'center' }}
                        >
                            <ShortCard game={{ ...game }} />
                        </SwiperSlide>
                    ))
                }
            />
        </>
    );
};

export default GameDetails;
