import { all, call } from "redux-saga/effects";
import tvShow from "./tvShow/saga";


export default function* rootSaga() {
  yield all([
    call(tvShow),
  ]);
}