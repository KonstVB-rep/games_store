import React from 'react';

import NO_IMAGE from 'assets/not-image.webp';
import { Link } from 'react-router-dom';

import { ButtonAddToCart } from '../Buttons';

import FavoriteIcon from '../icons/FavoriteIcon';

import cn from './styles.module.scss';

const ShortCard = ({ game, isCanBuy = true }) => {
    game.img = game.img ?? game.image__background;
    const altImage = game.img ? 'Poster' : 'Not found';

    return (
        <div className={cn.card}>
            <Link
                to={`/games/${game.slug}`}
                title="Go to the game page"
                className={cn.card__link}
            ></Link>
            <div className={cn.card__img}>
                <img
                    src={game.img || NO_IMAGE}
                    alt={altImage}
                    className={cn.poster}
                    loading="lazy"
                />
            </div>
            <div className={cn['card__title-box']}>
                <p className={cn.card__title}>{game.name}</p>
            </div>
            {isCanBuy && <ButtonAddToCart game={game} />}
            <FavoriteIcon game={game} />
            <div
                className={cn['card__bg']}
                style={{ background: `url(${game.img}) center center/ cover no-repeat` }}
            />
        </div>
    );
};

export default ShortCard;
