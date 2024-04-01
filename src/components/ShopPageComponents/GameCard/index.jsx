import { memo } from 'react';

import Genres from 'components/Genres';
import PriceGameBox from 'components/PriceGameBox';
import RatingInfo from 'components/ui/RatingInfo';
import FavoriteIcon from 'components/ui/icons/FavoriteIcon';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectGame } from 'store/games/gamesSlice';

import cn from './styles.module.scss';

const GameCard = memo(({ id }) => {
    const game = useSelector(selectGame(id));
    const { name, genres, slug, img, price, ...fromRating } = game;

    return (
        <article className={cn.card}>
            <FavoriteIcon game={game} />

            <Link className={cn.wrapper} to={`/games/${slug}`} title="Go to the game page">
                <img src={img} alt="poster" className={cn.img} loading="lazy" />
            </Link>

            <div className={cn.details}>
                <h2 className={cn.title}>{name}</h2>

                <Genres genres={genres} />

                <RatingInfo className={cn.details__secondary} {...fromRating} />

                <PriceGameBox game={game} />
            </div>
        </article>
    );
});

export default GameCard;
