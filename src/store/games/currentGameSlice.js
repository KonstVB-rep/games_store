import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../utils/getData";
import { transformData, transformDataItem } from "../../utils/transformData";

const initialState = {
  currentGame: {},
  status: null,
  error: null,
};

export const loadCurrentGames = createAsyncThunk(
  "games/loadCurrentGames",
  async function (url, { rejectWithValue }) {
    return await getData(url, transformDataItem, rejectWithValue);
  }
);

const currentGameSLice = createSlice({
  name: "currentGame",
  initialState,
  reducers: {
    clearCurrentGames: (state) => {
      state.currentGame = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCurrentGames.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadCurrentGames.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadCurrentGames.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.currentGame = action.payload;
    });
  },
});

export const { clearCurrentGames } = currentGameSLice.actions;
const singleGameReducer = currentGameSLice.reducer;
export default singleGameReducer;
