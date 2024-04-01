import React from 'react';

import NO_IMAGE from 'assets/not-image.webp';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import cn from './styles.module.scss';

const Card = ({ game }) => {
    const altImage = game.img ? 'Poster' : 'Not found';

    return (
        <motion.div
            className={cn.card}
            initial={{ opacity: 0, height: 0, y: 50 }}
            animate={{ opacity: 1, height: '100%', y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
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
        </motion.div>
    );
};

export default Card;
