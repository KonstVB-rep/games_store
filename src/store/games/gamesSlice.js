import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transformData } from "../../utils/transformData";
import { getData } from "../../utils/getData";

const initialState = {
  gamesList: [],
  status: "loading",
  error: null,
  currentPage: 1,
  countPage: 0
};

export const loadGames = createAsyncThunk(
  "games/loadGames",
  async function (url, { rejectWithValue }) {
    return await getData(url,transformData,rejectWithValue);
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    rememberCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    rememberCountPage: (state) => {
      state.countPage = state.currentPage
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadGames.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadGames.rejected, (state, action) => {
      console.log(action)
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadGames.fulfilled, (state, action) => {
      state.status = "fulfilled";
        if(action.payload.length && state.currentPage > state.countPage){
        state.gamesList.push(...action.payload);
      }
    });
  },
});

export const selectAllGames = (state) => state.games.gamesList;
export const selectStatus = (state) => state.games.status;
export const {rememberCurrentPage,rememberCountPage} = gamesSlice.actions;

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
