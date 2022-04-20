import React from "react";
import { DiAndroid } from "react-icons/di";
import { AiFillApple, AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white py-10">
        <div className="hidden xl:grid xl:grid-cols-5 ">
          <div>
            <p className="text-lg font-bold">TIX</p>
            <div className="text-xs font-thin text-gray-300">
              <p>FAQ</p>
              <p>Brand Guidelines</p>
            </div>
          </div>
          <div className="text-xs font-thin text-gray-300">
            <p className="uppercase text-lg font-bold ">terms and conditions</p>
            <p>Thỏa thuận sử dụng</p>
            <p>Chính sách bảo mật</p>
          </div>
          <div>
            <p className="text-lg font-bold">ĐỐI TÁC</p>
            <div className="flex space-x-4 text-xs font-thin text-gray-300">
              <p>CGV</p>
              <p>Star</p>
              <p>Lotte</p>
              <p>Zalo Pay</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">MOBILE APP</p>
            <p className="flex">
              <DiAndroid size={30} color="grey" />
              <AiFillApple size={30} color="grey" />
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">SOCIAL</p>
            <p className="flex">
              <AiFillFacebook size={30} color="grey" />
              <RiInstagramFill size={30} color="grey" />
            </p>
          </div>
        </div>
        <div className="border-t-2 flex flex-col items-center justify-center md:grid md:grid-cols-3">
          <div>
            <img src="./logo.png" alt="logo" className="py-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-center">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p className="text-center">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
              0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020
              do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại
              (Hotline): 1900 545 436
            </p>
          </div>
          <div className="px-20 py-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt83vlRh94gWblIG4cjBrAcNpUJnkG3c79nw&usqp=CAU"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
