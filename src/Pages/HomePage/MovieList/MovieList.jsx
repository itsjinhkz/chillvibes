import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList() {
  let movieList = useSelector((state) => state.movieReducer.movieList);
  return (
    <div className="container mx-auto my-20" id="lichchieu">
      <div className="md:grid md:gap-5 md:grid-cols-3 lg:grid lg:gap-5 lg:grid-cols-3 xl:grid xl:gap-5 xl:grid-cols-4">
        {movieList.map((item) => {
          return <MovieItem data={item} />;
        })}
      </div>
    </div>
  );
}
