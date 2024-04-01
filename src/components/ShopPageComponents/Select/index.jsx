import React from 'react';

import { useDispatch } from 'react-redux';
import { rememberCurrentGenre, rememberCurrentPage } from 'store/games/gamesSlice';

import cn from './styles.module.scss';

const Select = ({ genres, setCurrentGenre, currentGenre }) => {
    const dispatch = useDispatch();
    return (
        <>
            <form className={cn.form}>
                <label htmlFor="genres" className={cn.label}>
                    Select an genres
                </label>
                <select
                    id="genres"
                    className={cn.select}
                    defaultValue={currentGenre}
                    onChange={(e) => {
                        setCurrentGenre(e.target.value);
                        dispatch(rememberCurrentGenre(e.target.value));
                        dispatch(rememberCurrentPage(1));
                    }}
                >
                    <option key="all" value="all">
                        All
                    </option>
                    {genres.map(({ id, name, slug }) => (
                        <option key={id} value={slug}>
                            {name}
                        </option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default Select;
