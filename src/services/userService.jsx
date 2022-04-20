import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../configURL/constants";
const BASE_URL = DOMAIN;
const TOKEN = TOKEN_CYBERSOFT;

export const userService = {
  signup(data) {
    return axios({
      url: BASE_URL + "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
  login(data) {
    return axios({
      url: BASE_URL + "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
};
