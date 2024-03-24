import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import MotionContainer from 'components/MotionContainer';
import { GameDetails } from 'components/SinglePageComponents';

import { PATH } from '../../constants/api';
import { getData } from '../../api/getData';
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
