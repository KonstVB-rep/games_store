import React from 'react';
import { useSelector } from 'react-redux';

import { selectFavorites } from 'store/games/gamesSlice';
import ShortCard from 'components/ui/ShortCard';
import TitleEmptyPage from 'components/TitleEmptyPage';

import cn from './styles.module.scss';

const FavoritesList = () => {
    const favoritesList = useSelector(selectFavorites);

    const renderFavoritesList = favoritesList.map((item) => (
        <ShortCard key={item.id} game={{ ...item }} />
    ));

    return (
        <>
            {renderFavoritesList.length ? (
                <>
                    <h1 className="visually-hidden">list of favorites games</h1>

                    <div className={cn.favorites__list}>{renderFavoritesList}</div>
                </>
            ) : (
                <TitleEmptyPage text="The favorites list is empty" />
            )}
        </>
    );
};

export default FavoritesList;
