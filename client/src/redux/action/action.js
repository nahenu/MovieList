import {
  Favourite_Movies,
  MOVIE_LIST,
  Remove_Favourite_Movies,
} from "../constants/constant";

export const movieList = () => {
  return {
    type: MOVIE_LIST,
  };
};

export const favouriteMovies = (data) => {
  return {
    type: Favourite_Movies,
    data: data.e,
  };
};

export const removeFavouriteMovies = (data) => {
  return {
    type: Remove_Favourite_Movies,
    data: data,
  };
};
