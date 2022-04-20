import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { localService } from "../../services/localService";
import { SET_USER_INFOR } from "../../redux/constants/userConstanst";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavHeaderUserTablet() {
  let dispatch = useDispatch();
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  let handleLogout = () => {
    localService.removeUserInfor();
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
    Swal.fire("Thông báo,", "Bạn đã đăng xuất thành công!", "success");
  };
  return userInfor ? (
    <div className="flex justify-between items-center flex-col">
      <div
        className=" w-28 flex items-center justify-center  text-base cursor-default "
        style={{ paddingTop: "18px" }}
      >
        <p>
          <FaUserCircle color="blue" size={30} className="px-1" />
        </p>
        <p className="text-blue-700">
          {userInfor.hoTen.length > 6
            ? userInfor.hoTen.slice(0, 6) + `...`
            : userInfor.hoTen}
        </p>
      </div>
      <div className="w-28 flex items-center justify-center text-base bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer">
        <button className="w-full text-white" onClick={handleLogout}>
          Đăng xuất
        </button>
        <p>
          <BiLogOut size={30} color="white" className="pt-3" />
        </p>
      </div>
    </div>
  ) : (
    <div className="w-44">
      <Link to="/login">
        <button className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg text-white cursor-pointe mx-1 w-20 h-10">
          Đăng nhập
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-lg text-white cursor-pointer mx-1 w-20 h-10">
          Đăng ký
        </button>
      </Link>
    </div>
  );
}
