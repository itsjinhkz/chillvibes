import React from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

export default function NavHeaderTablet() {
  return (
    <div className=" h-16 w-full px-10 flex items-center justify-between shadow-xl bg-white ">
      <Link to="/">
        <div className="flex items-center ">
          <img src="./logo.png" alt="logo" />
        </div>
      </Link>

      <div>
        <NavModal />
      </div>
    </div>
  );
}
