import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../utils/getData";
import { transformDataItem } from "../../utils/transformData";

const initialState = {
  singleGame: {},
  status: "idle",
  error: null,
};

export const loadSingleGames = createAsyncThunk(
  "games/loadSingleGames",
  async function (url, { rejectWithValue }) {
    return await getData(url, transformDataItem, rejectWithValue);
  }
);

const singleGameSlice = createSlice({
  name: "singleGame",
  initialState,
  reducers: {
    clearSingleGames: (state) => {
      state.singleGame = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSingleGames.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadSingleGames.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadSingleGames.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.singleGame = action.payload;
    });
  },
});

export const { clearSingleGames } = singleGameSlice.actions;
const singleGameReducer = singleGameSlice.reducer;
export default singleGameReducer;
