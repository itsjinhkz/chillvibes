import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavHeaderUser from "./NavHeaderUser";

export default function NavHeader() {
  return (
    <div className="fixed top-0 right-0 z-10 h-16 w-full px-10 flex items-center justify-between shadow-xl bg-white ">
      <Link to="/">
        <div className="flex items-center ">
          <img src="./logo.png" alt="logo" />
        </div>
      </Link>
      <div className="space-x-4 font-bold">
        <HashLink smooth to="/#lichchieu">
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Lịch Chiếu
          </span>
        </HashLink>
        <HashLink smooth to="/#cumrap">
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Cụm Rạp
          </span>
        </HashLink>
        <HashLink smooth to="/#phoneapp">
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Ứng Dụng
          </span>
        </HashLink>
      </div>

      <div>
        <NavHeaderUser />
      </div>
    </div>
  );
}
