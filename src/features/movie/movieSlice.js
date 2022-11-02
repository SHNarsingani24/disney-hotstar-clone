import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommends: null,
    trendings: null,
    originals: null,
    newDisney: null
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.newDisney = action.payload.newDisney;
            state.recommends = action.payload.recommends;
            state.originals = action.payload.originals;
            state.trendings = action.payload.trendings;
        }
    }
});

export const {setMovies} = movieSlice.actions;

export const selectRecommends = state => state.movie.recommends;
export const selectTrendings = state => state.movie.trendings;
export const selectNewDisney = state => state.movie.newDisney;
export const selectOriginals = state => state.movie.originals;

export default movieSlice.reducer;