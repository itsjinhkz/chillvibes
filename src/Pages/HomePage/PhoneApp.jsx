import React from "react";

import phoneImg from "../../assets/images/phone.png";
export default function PhoneApp() {
  return (
    <div
      className="pt-32 pb-20 "
      style={{
        backgroundImage: `url("http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg")`,
      }}
      id="phoneapp"
    >
      <div className="grid justify-items-center lg:grid-cols-2 lg:justify-items-center">
        <div className="text-white text-center lg:text-left">
          <p className="text-3xl font-bold">
            Ứng dụng tiện lợi dành cho <br />
            <br />
            người yêu điện ảnh
          </p>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm <br />{" "}
            rạp và đổi quà hấp dẫn.
          </p>
          <button className="py-4 px-10 mt-5 mb-3 rounded bg-red-500 cursor-pointer text-lg font-medium">
            <a
              className="text-white"
              href="https://www.facebook.com/itsjinhk/"
              target="_blank"
            >
              APP MIỄN PHÍ - TẢI VỀ NGAY!
            </a>
          </button>
          <p>
            TIX có hai phiên bản{" "}
            <span className="underline cursor-pointer">IOS</span> &{" "}
            <span className="underline cursor-pointer">Android</span>
          </p>
        </div>
        <div className=" relative overflow-hidden ">
          <div>
            <div className="rounded-xl absolute top-0 ">
              <img
                src="http://demo1.cybersoft.edu.vn/static/media/banner-slider-3.33a486d1.jpg"
                alt="phineInfor"
              />
            </div>
            <img src={phoneImg} alt="phone" className="w-56 " />
          </div>
        </div>
      </div>
    </div>
  );
}
