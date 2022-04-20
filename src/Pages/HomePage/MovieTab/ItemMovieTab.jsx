import React from "react";
import moment from "moment";
export default function ItemMovieTab({ data }) {
  // console.log("data", data);
  return (
    <div className="flex w-full h-32 space-x3">
      <img
        className="w-1/5 h-full flex-shrink-0 object-fill rounded "
        src={data.hinhAnh}
        alt="hinhAnh"
      />
      <div className="flex-grow space-x-4 space-y-4">
        <p className="text-xl font-semibold pl-4">{data.tenPhim}</p>
        <div className="grid grid-cols-3 gap-4">
          {data.lstLichChieuTheoPhim.map((item, index) => {
            // console.log("item", item);
            return index < 6 ? (
              <button className="bg-gray-200 rounded">
                {moment(item.ngayChieuGioChieu).format("DD/MM/YY ~ hA")}
              </button>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
}
