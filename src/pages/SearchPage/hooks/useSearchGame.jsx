import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { PATH } from '../../../constants/api';
import { loadSearchGames } from '../../../store/search/searchSlice';

const useSearchGame = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const makeRequest = (query) => {
        dispatch(loadSearchGames(PATH.SEARCH_GAMES(query)));
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim().length) {
            makeRequest(searchValue);
            setSearchValue('');
        }
    };

    return {
        handleSearch,
        handleSubmit,
        searchValue,
    };
};

export default useSearchGame;
