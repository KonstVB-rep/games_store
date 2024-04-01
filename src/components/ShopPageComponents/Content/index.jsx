import React, { useState } from 'react';

import MotionContainer from 'components/MotionContainer';
import useLoadGames from 'pages/ShopPage/hooks/useLoadGames';

import { useSelector } from 'react-redux';

import GamesList from '../GamesList';
import Select from '../Select';
import Skeleton from '../Skeleton';

import cn from './styles.module.scss';

const Content = () => {
    const { currentGenre, status } = useSelector((state) => state.games);
    const [genre, setGenre] = useState(currentGenre);
    const { handleClick, isEnd, gamesList, genres } = useLoadGames(genre);
    return (
        <>
            <Select genres={genres} setCurrentGenre={setGenre} currentGenre={currentGenre} />
            <MotionContainer className={cn.section}>
                <GamesList />

                <Skeleton />
            </MotionContainer>

            {!isEnd && status === 'fulfilled' && gamesList.length ? (
                <button className={cn['load-more']} onClick={handleClick}>
                    Load more
                </button>
            ) : null}
        </>
    );
};

export default Content;
