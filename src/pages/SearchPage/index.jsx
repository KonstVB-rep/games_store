import React from 'react';
import { useSelector } from 'react-redux';

import { FormSearch } from '../../components/SearchPageComponents';
import { GamesList } from '../../components/SearchPageComponents/';
import MotionContainer from '../../components/MotionContainer';
import ErrorPage from '../ErrorPage';

import cn from './styles.module.scss';

const SearchPage = () => {
    const status = useSelector((state) => state.search.status);

    if (status === 'rejected') return <ErrorPage />;

    return (
        <div className="container">
            <MotionContainer className={cn.main}>
                <FormSearch />
                <GamesList />
            </MotionContainer>
        </div>
    );
};

export default SearchPage;
