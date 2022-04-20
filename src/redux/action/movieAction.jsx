import { GET_MOVIE_LIST } from "../constants/movieConstanst";

export const getMovieListAction = (payload) => ({
  type: GET_MOVIE_LIST,
  payload: payload,
});
