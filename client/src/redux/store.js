import { applyMiddleware, combineReducers, createStore } from "redux";
import { movieData, favouriteMovieData } from "./reducer/reducer";
import createSagaMiddleware from "redux-saga";
import produceData from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  movieData,
  favouriteMovieData,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(produceData);
