import { localService } from "../../services/localService";
import { SET_USER_INFOR } from "../constants/userConstanst";

const initialState = {
  userInfor: localService.getUserInfor(),
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
