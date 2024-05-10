import { About, List, Slider, SupportAndNews } from 'components/HomePageComponents';
import Card from 'components/HomePageComponents/Card';
import Spinner from 'components/ui/Spinner';
import ErrorPage from 'pages/ErrorPage';
import { SwiperSlide } from 'swiper/react';

import SliderFlex from '../../components/ui/Slider';

import { dataSLider } from './data';
import useGames from './hooks/useGames';

import cn from './styles.module.scss';

const Homepage = () => {
    const { gamesByRatingMonth, gamesByRatingYear, gamesByRating, isLoading, error } = useGames();

    if (error) return <ErrorPage id="error" />;
    if (isLoading) return <Spinner />;

    return (
        <div className={cn.section}>
            <Slider data={dataSLider} />
            <div className="container">
                <About />
                <List data={gamesByRatingMonth} title="Top new games from last month by rating" />
                <List data={gamesByRating} title="Top games by rating" />
                <SliderFlex
                    data={gamesByRatingYear}
                    title="Top games from last year by rating"
                    titleClass="slider__title_2rem"
                    renderData={(data) =>
                        data?.map((game) => (
                            <SwiperSlide
                                key={game.id}
                                style={{ maxWidth: '260px', textAlign: 'center' }}
                            >
                                <Card game={{ ...game }} isCanBuy={false} />
                            </SwiperSlide>
                        ))
                    }
                    isLoading={false}
                />
                <SupportAndNews />
            </div>
            <div className="bg-homepage"></div>
        </div>
    );
};

export default Homepage;
