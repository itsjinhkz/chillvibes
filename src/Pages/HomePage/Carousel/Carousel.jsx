import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieService } from "../../../services/movieService";
import CarouselModal from "./CarouselModal";
import "./carousel.css";

function onChange(a, b, c) {
  // console.log(a, b, c);
}

export default function Carousela() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    movieService
      .getMovieBanners()
      .then((res) => {
        setdata(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="my-20">
      <Carousel afterChange={onChange} draggable autoplay autoplaySpeed={3000}>
        {data.map((item, index) => {
          return (
            <div className="hidden md:block md:w-screen md:h-96 lg:h-700 xl:h-800 relative ">
              <img
                src={item.hinhAnh}
                alt="photo"
                className="w-full h-full bg-cover"
              />
              <div className="absolute top-1/2 right-1/2">
                <CarouselModal index={index} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
