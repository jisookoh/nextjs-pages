import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSliceActions } from "store/lib/actionCreator";
import { MovieState } from "./interface";
import { featureKey } from "store/interface/featureKey";


const name = featureKey.movies;

const initialState: MovieState = {
    loading: false,
    data: null,
    error: null,
}

const moviesSlice = createSlice({
    name,
    initialState,
    reducers: {
        asyncMoviesRequest(state) {
            state.loading = true;
        },
        asyncMoviesSuccess(state, action: PayloadAction) {
            state.data = action.payload;
            state.loading = false;
        },
        asyncMoviesFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        asyncMoviesEnd(state) {
            state.data = null;
        },
    }
})

const { reducer } = moviesSlice;
export const asyncMoviesActions = getSliceActions(moviesSlice, "asyncMovies")

export default reducer;