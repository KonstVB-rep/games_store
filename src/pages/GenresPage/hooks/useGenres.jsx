import { useEffect, useState } from 'react';

import { getData } from 'api/getData';
import { setPromisesResolve } from 'utils/setPromisesResolve';
import { transformData } from 'utils/transformData';

import { PATH } from 'constants/api';

const useGenres = () => {
    const [genres, setGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const getGamesFromGenres = (arr) => {
        setPromisesResolve(arr, (item) =>
            getData(PATH.SINGLE_GAME_URL(item.slug), transformData)
        ).then((data) => {
            setGames(data);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        getData(PATH.GAME_GENRES())
            .then((data) => {
                return getData(PATH.GENRE_DESCRIPTION(data?.[activeSlide].id), (genre) => {
                    data[activeSlide].description = genre.description;
                    return data;
                });
            })
            .then((data) => {
                setGenres(data);
                getGamesFromGenres(data?.[activeSlide]?.games);
            })
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        let didCancel = false;
        setIsLoading(true);
        if (!genres.length || genres?.[activeSlide].description) return;

        getData(PATH.GENRE_DESCRIPTION(genres?.[activeSlide].id))
            .then((data) => {
                if (!didCancel) {
                    genres[activeSlide].description = data.description;
                    setGenres([...genres]);
                    getGamesFromGenres(genres?.[activeSlide]?.games);
                }
            })
            .finally(() => setIsLoading(false));
        return () => {
            setGames([]);
            didCancel = true;
        };
    }, [activeSlide]);

    return {
        genres,
        isLoading,
        games,
        activeSlide,
        setActiveSlide,
    };
};

export default useGenres;
