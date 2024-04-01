import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    loadGames,
    rememberCurrentPage,
    rememberCountPage,
    loadGenres,
} from 'store/games/gamesSlice';

import { PATH } from 'constants/api';

const useLoadGames = (genre) => {
    const dispatch = useDispatch();

    const { currentPage, countPage, isEnd, gamesList, genres, currentGenre } = useSelector(
        (state) => state.games
    );

    const handleClick = () => {
        if (currentGenre !== 'all') {
            dispatch(loadGames(PATH.GAMES_BY_GENRE(currentGenre, currentPage + 1)));
        } else {
            dispatch(loadGames(PATH.GAMES_URL(currentPage + 1)));
        }
        dispatch(rememberCurrentPage(currentPage + 1));
    };

    useEffect(() => {
        dispatch(loadGenres(PATH.GAME_GENRES()));
        if (currentGenre !== 'all') {
            dispatch(loadGames(PATH.GAMES_BY_GENRE(currentGenre, currentPage)));
        } else {
            dispatch(loadGames(PATH.GAMES_URL(currentPage)));
        }
        return () => dispatch(rememberCountPage());
    }, []);

    useEffect(() => {
        if (genre === 'all') {
            dispatch(loadGames(PATH.GAMES_URL(currentPage)));
        } else {
            dispatch(loadGames(PATH.GAMES_BY_GENRE(genre, currentPage)));
        }
        return () => dispatch(rememberCountPage());
    }, [countPage, genre]);

    return {
        isEnd,
        handleClick,
        gamesList,
        genres,
    };
};

export default useLoadGames;
