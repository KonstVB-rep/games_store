import React from 'react';

import { useSelector } from 'react-redux';

import { getRandomIntInclusive } from 'utils/getRandomIntInclusive';

import MotionContainer from '../../components/MotionContainer';
import { FormSearch } from '../../components/SearchPageComponents';
import { GamesList } from '../../components/SearchPageComponents/';
import ErrorPage from '../ErrorPage';

import cn from './styles.module.scss';

const SearchPage = () => {
    const { status, gamesList } = useSelector((state) => state.search);

    const indexGame = getRandomIntInclusive(0, gamesList.length - 1);

    if (status === 'rejected') return <ErrorPage id="error" />;

    return (
        <main className={cn.main}>
            <div className="container">
                <MotionContainer className={cn.content}>
                    <FormSearch />
                    <GamesList />
                </MotionContainer>
            </div>
            <div
                className={cn['main-bg']}
                style={{
                    background: `url(${gamesList?.[indexGame]?.img}) center center/cover no-repeat`,
                }}
            />
        </main>
    );
};

export default SearchPage;
