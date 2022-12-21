import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { MovieState } from "./movie/interface";
import movies from "./movie/reducer";


export type State = {
	movies: MovieState
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
	switch (action.type) {
		case HYDRATE:
		return {
			...state,
			...action.payload,
		};
		default: {
		const combinedReducer = combineReducers({
			movies,
		});
		return combinedReducer(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
