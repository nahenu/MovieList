import { takeEvery, put } from "redux-saga/effects";
import { MOVIE_LIST, SET_MOVIE_LIST } from "../constants/constant";
import { options, url } from "../../api";

function* fetchMovieData() {
  const res = yield fetch(url, options);
  const data = yield res.json();
  yield put({ type: SET_MOVIE_LIST, data });
}

function* produceData() {
  yield takeEvery(MOVIE_LIST, fetchMovieData);
}

export default produceData;
