import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../configURL/constants";

const BASE_URL = DOMAIN;
const TOKEN = TOKEN_CYBERSOFT;

export const movieService = {
  getMovieList() {
    return axios({
      url: BASE_URL + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01 ",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
  getDetailMovie(id) {
    return axios({
      url: BASE_URL + "/api/QuanLyPhim/LayThongTinPhim?maPhim=" + id,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
  getMovieBanners() {
    return axios({
      url: BASE_URL + "/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  },
};
