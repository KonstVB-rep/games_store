import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transformData } from "../../utils/transformData";
import { GAMES_URL } from "../../constants/api";

const initialState = {
  gamesList: [],
  status: null,
  error: null,
};

// export const loadGames = createAsyncThunk(
//   "games/loadGames",
//   async function (_, { rejectWithValue, dispatch }) {
//     console.log("ok");
//     try {
//       console.log("ok");
//       const response = await fetch(GAMES_URL);
//       if (!response.ok) {
//         throw new Error("Fetch request failed");
//       }
//       const resJson = await response.json();
//       console.log(resJson);
//       return resJson.results;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(GAMES_URL);

      if (!response.ok) {
        throw new Error("Fetch request failed");
      }
      const resJson = await response.json();
      return resJson.results.map(transformData);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.gamesList = action.payload;
    });
  },
});

// (builder) => {
//   builder.addCase(fetchGames.pending, (state, action) => {
//     state.status = "loading";
//     state.error = null;
//   });
//   builder.addCase(fetchGames.rejected, (state, action) => {
//     state.status = "rejected";
//     state.error = action.payload || action.meta.error;
//   });
//   builder.addCase(fetchGames.fulfilled, (state, action) => {
//     state.status = "fulfilled";
//     state.list = action.payload.data;
//   });
// },
export const selectAllGames = (state) => state.games.gamesList;

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
