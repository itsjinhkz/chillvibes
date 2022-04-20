import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function MovieItem(props) {
  let data = props.data;
  return (
    <div className=" w-full pb-5">
      <Link to={`/detail/${data.maPhim}`}>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={
            <img
              alt="example"
              src={data.hinhAnh}
              className="w-full h-96 object-cover"
            />
          }
        >
          <Meta
            title={data.tenPhim}
            description={
              data.moTa.length > 50 ? data.moTa.slice(0, 50) + "..." : data.moTa
            }
          />
        </Card>
      </Link>
    </div>
  );
}
