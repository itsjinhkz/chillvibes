import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../configURL/constants";

const BASE_URL = DOMAIN;
const TOKEN = TOKEN_CYBERSOFT;

export const cinemaService = {
  getCinemaInfor() {
    return axios({
      url: BASE_URL + "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
};
