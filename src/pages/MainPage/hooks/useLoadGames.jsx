import { PATH } from 'constants/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, rememberCurrentPage, rememberCountPage } from 'store/games/gamesSlice';

const useLoadGames = () => {
    const dispatch = useDispatch();

    const { currentPage, countPage, status, isEnd } = useSelector((state) => state.games);

    const handleClick = () => {
        dispatch(loadGames(PATH.GAMES_URL(currentPage + 1)));
        dispatch(rememberCurrentPage(currentPage + 1));
    };

    useEffect(() => {
        dispatch(loadGames(PATH.GAMES_URL(currentPage)));
        return () => dispatch(rememberCountPage());
    }, []);

    useEffect(() => {
        if (currentPage !== countPage && countPage > 1) {
            dispatch(loadGames(PATH.GAMES_URL(currentPage)));
        }
        return () => dispatch(rememberCountPage());
    }, [countPage]);

    return {
        status,
        isEnd,
        handleClick,
    };
};

export default useLoadGames;
