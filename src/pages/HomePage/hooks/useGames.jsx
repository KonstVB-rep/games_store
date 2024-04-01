import { useEffect, useState } from 'react';

import { getData } from 'api/getData';

import { transformData } from 'utils/transformData';

import { PATH } from 'constants/api';

const useGames = () => {
    const [gamesByRatingMonth, setGamesByRatingMonth] = useState([]);
    const [gamesByRatingYear, setGamesByRatingYear] = useState([]);
    const [gamesByRating, setGamesByRating] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getGames = async () => {
            setIsLoading(true);
            await getData(PATH.LAST_GAMES(), transformData).then((res) =>
                setGamesByRatingMonth(res)
            );
            await getData(PATH.GAMES_URL(1, 20, '-rating'), transformData).then((res) =>
                setGamesByRating(res)
            );
            await getData(PATH.LAST_GAMES(365), transformData).then((res) =>
                setGamesByRatingYear(res)
            );
        };
        getGames()
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    }, []);
    return {
        gamesByRatingMonth,
        gamesByRatingYear,
        gamesByRating,
        isLoading,
        error,
    };
};

export default useGames;
