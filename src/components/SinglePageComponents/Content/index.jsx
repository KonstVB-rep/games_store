import React from 'react';

import Genres from 'components/Genres';
import RatingInfo from 'components/ui/RatingInfo';

import PriceGameBox from '../../PriceGameBox';
import DevelopersList from '../DevelopersList';

import cn from './styles.module.scss';

const Content = ({ game }) => {
    return (
        <div className={cn.content}>
            <p className={cn.description}>
                {game.description
                    ? game.description
                    : 'The description of the game has not been published'}
            </p>

            <DevelopersList developers={game.developers} />

            <Genres genres={game.genres} />

            <RatingInfo
                className={cn.rating_info}
                rating={game.rating}
                ratingsCount={game.ratingsCount}
                released={game.released}
            />

            <PriceGameBox game={game} />
        </div>
    );
};

export default Content;
