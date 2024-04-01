import React from 'react';

import { Link } from 'react-router-dom';

import cn from './styles.module.scss';

const Game = ({ id, name, img }) => {
    return (
        <>
            <li className={cn['game-item']}>
                <div
                    className={cn['game-bg']}
                    style={{ background: `url(${img}) center center/cover no-repeat` }}
                />
                <Link to={`/games/${id}`} className={cn['game-link']}>
                    <span>{name}</span>
                </Link>
            </li>
        </>
    );
};

export default Game;
