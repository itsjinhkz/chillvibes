import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <p className="text-3xl">404</p>
      <p className="text-lg">Bạn đang truy cập một trang không hợp lệ.</p>
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-xl text-white">
          Đi tới trang chủ
        </button>
      </Link>
    </div>
  );
}
