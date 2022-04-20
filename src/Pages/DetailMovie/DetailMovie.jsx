import moment from "moment";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { AiTwotoneStar } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailMovie() {
  let { id } = useParams();
  const [data, setdata] = useState({});
  console.log("data", data);
  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        setdata(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="h-screen  bg-gray-900">
      <div className="container mx-auto pt-20 h-1/2  ">
        <div className="flex h-full">
          <div>
            <img
              src={data.hinhAnh}
              alt="img"
              className="w-full h-full rounded"
            />
          </div>
          <div className="w-full h-full text-white pl-10 flex flex-col justify-between ">
            <p className="font-semibold text-2xl">{data.tenPhim}</p>
            <div className="font-thin">
              <p className="text-lg">
                Nội dung: <span className="text-base">{data.moTa}</span>{" "}
              </p>
            </div>
            <div className="flex">
              <p className="font-thin">Ngày khởi chiếu:</p>
              <p className="ml-2">
                {moment(data.ngayKhoiChieu).format("DD/MM/YY ~ hA")}
              </p>
            </div>
            <div className="flex">
              <AiTwotoneStar size={40} color="yellow" />{" "}
              <p className="text-2xl">{data.danhGia} / 10</p>
            </div>
          </div>
        </div>
        <div className="my-20 flex justify-center">
          <ReactPlayer url={data.trailer} />
        </div>
      </div>
    </div>
  );
}
