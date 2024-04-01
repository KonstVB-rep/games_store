import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getData } from '../../api/getData';
import { getNameAndImg } from '../../utils/transformData';

const initialState = {
    error: null,
    gamesList: [],
    status: 'idle',
};

export const loadSearchGames = createAsyncThunk(
    'search/loadSearchGames',
    async function (url, { rejectWithValue }) {
        return await getData(url, getNameAndImg, rejectWithValue);
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadSearchGames.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(loadSearchGames.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
        });
        builder.addCase(loadSearchGames.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.gamesList = [];
            state.gamesList.push(...action.payload);
        });
    },
});

const searchReducer = searchSlice.reducer;
export default searchReducer;
