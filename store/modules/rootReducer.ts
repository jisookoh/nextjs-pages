import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import tvShow from './tvShow/reducer';
import ITvShowState from "./tvShow/interface";

export type State = {
	tvShow: ITvShowState
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
			tvShow,
		});
		return combinedReducer(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
