import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transformData } from "../../utils/transformData";
import { getData } from "../../utils/getData";

const initialState = {
  gamesList: [],
  status: "loading",
  error: null,
};

export const loadGames = createAsyncThunk(
  "games/loadGames",
  async function (url, { rejectWithValue }) {
    return await getData(url, transformData, rejectWithValue);
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGames.pending, (state, action) => {
      // state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadGames.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadGames.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.gamesList = action.payload;
    });
  },
});

export const selectAllGames = (state) => state.games.gamesList;
export const selectStatus = (state) => state.games.status;

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
