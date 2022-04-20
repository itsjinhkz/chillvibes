import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieListAction } from "../../redux/action/movieAction";
import { movieService } from "../../services/movieService";
import MovieList from "./MovieList/MovieList";
import MovieTab from "./MovieTab/MovieTab";
import PhoneApp from "./PhoneApp";
import Carousel from "./Carousel/Carousel";

export default function HomePage() {
  let dispatch = useDispatch();
  useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        dispatch(getMovieListAction(res.data.content));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <Carousel />
      <MovieList />
      <MovieTab />
      <PhoneApp />
    </div>
  );
}
