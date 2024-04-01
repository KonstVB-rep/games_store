import React from 'react';

import MotionContainer from 'components/MotionContainer';
import { GameDetails } from 'components/SinglePageComponents';
import { Await, useLoaderData } from 'react-router-dom';

import { getData } from '../../api/getData';
import { PATH } from '../../constants/api';
import { transformDataItem } from '../../utils/transformData';

import cn from './styles.module.scss';
const SinglePage = () => {
    const { game } = useLoaderData();

    return (
        <div className="container">
            <MotionContainer className={cn.game}>
                <Await resolve={game}>
                    <GameDetails />
                </Await>
            </MotionContainer>
        </div>
    );
};

export const singlePageLoader = async ({ _, params }) => {
    const { name } = params;

    return {
        game: getData(PATH.SINGLE_GAME_URL(name), transformDataItem),
    };
};

export default SinglePage;
