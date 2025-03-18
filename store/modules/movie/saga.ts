import { asyncMoviesActions } from "./reducer";
import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import axios from "axios";
import { apiDocs } from "./apiDocs";

function getMoviesApi(params) {
  return axios.get(`${apiDocs.boxOffice}${params}`, params);
}

function* getMovies(action) {
  try {
    const result = yield call(getMoviesApi, action.payload);
    yield put({
      type: asyncMoviesActions.success,
      payload: result.data,
    });
  } catch (err: any) {
    yield put({
      type: asyncMoviesActions.failure,
      payload: err.response.data,
    });
  }
}

function* watchGetMovies() {
  yield takeLatest(asyncMoviesActions.request, getMovies);
}

export default function* movieSaga() {
  yield all([fork(watchGetMovies)]);
}
