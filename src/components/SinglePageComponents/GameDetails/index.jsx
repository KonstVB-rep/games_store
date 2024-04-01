import { useEffect, useState } from 'react';

import { getData } from 'api/getData';
import ShortCard from 'components/ui/ShortCard';
import { useAsyncValue } from 'react-router-dom';

import 'swiper/css';
import { SwiperSlide } from 'swiper/react';
import { transformData } from 'utils/transformData';

import { PATH } from 'constants/api';

import Slider from '../../ui/Slider';
import FavoriteIcon from '../../ui/icons/FavoriteIcon';
import Content from '../Content';
import PlatformsLIst from '../PlatformsLIst';
import Poster from '../Poster';

import SliderPoster from '../SliderPoster';

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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getGameSeries(game.id).then((res) => setGameSeries(res));
        getScreenshots(game.id).then((res) => {
            res.unshift({ image: game.img });
            setScreenShots(res);
        });
        setIsLoading(false);
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
                isLoading={isLoading}
                renderData={(data) =>
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
