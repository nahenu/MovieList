import {
  Favourite_Movies,
  Remove_Favourite_Movies,
  SET_MOVIE_LIST,
} from "../constants/constant";

export const movieData = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return action.data.movies;

    default:
      return state;
  }
};

export const favouriteMovieData = (state = [], action) => {
  switch (action.type) {
    case Favourite_Movies:
      return [...new Set([...state, action.data])];
    case Remove_Favourite_Movies:
      return state.filter((e) => {
        return e._id !== action.data;
      });
    default:
      return state;
  }
};
