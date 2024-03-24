import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllGames } from 'store/games/gamesSlice';
import GameCard from '../GameCard';

const GamesList = () => {
    const games = useSelector(selectAllGames);

    return (
        <>
            <h1 className="visually-hidden">list of game cards</h1>
            {games.map(({ id }) => (
                <GameCard key={id} id={id} />
            ))}
        </>
    );
};

export default GamesList;
