import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { transformGenres } from 'utils/transformGenres';

import { getData } from '../../api/getData';
import { transformData } from '../../utils/transformData';

const initialState = {
    countPage: 0,
    currentGenre: 'all',
    currentPage: 1,
    error: null,
    favorites: [],
    gamesList: [],
    genres: [],
    isEnd: false,
    status: 'loading',
};

export const loadGames = createAsyncThunk(
    'games/loadGames',
    async function (url, { rejectWithValue }) {
        return await getData(url, transformData, rejectWithValue);
    }
);

export const loadGenres = createAsyncThunk(
    'games/loadGenres',
    async function (url, { rejectWithValue }) {
        return await getData(url, transformGenres, rejectWithValue);
    }
);

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        rememberCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        rememberCountPage: (state) => {
            state.countPage = state.currentPage;
        },
        rememberCurrentGenre: (state, action) => {
            state.currentGenre = action.payload;
        },
        addFavorite: (state, action) => {
            const findFavorite = state.favorites.some((item) => item?.id === action.payload.id);
            if (!findFavorite) {
                state.favorites.push(action.payload);
            } else {
                state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadGames.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(loadGames.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
        });
        builder.addCase(loadGames.fulfilled, (state, action) => {
            state.status = 'fulfilled';

            if (!action.payload.length) {
                state.isEnd = true;
                return;
            } else {
                state.isEnd = false;
            }
            if (state.currentPage === 1) {
                state.gamesList = action.payload;
                return;
            }
            if (state.currentPage !== state.countPage) {
                state.gamesList.push(...action.payload);
            }
        });
        builder.addCase(loadGenres.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(loadGenres.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
        });
        builder.addCase(loadGenres.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload;
        });
    },
});

export const selectAllGames = (state) => state.games.gamesList;
export const selectFavorites = (state) => state.games.favorites;
export const selectSingleFavorite = (id) => (state) =>
    state.games.favorites.find((item) => item?.id === id);
export const selectGame = (id) => (state) => state.games.gamesList.find((item) => item.id === id);
export const { rememberCurrentPage, rememberCountPage, rememberCurrentGenre, addFavorite } =
    gamesSlice.actions;

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
