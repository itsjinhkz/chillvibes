import { GET_MOVIE_LIST } from "../constants/movieConstanst";

const initialState = {
  movieList: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST: {
      state.movieList = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
