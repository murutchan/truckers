import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";
import api from "../utils/api";

//registering a new user
export const registerUser = (formData) => async (dispatch) => {
  try {
    //we created api file in utils
    const res = await api.post("/users", formData);

    //if success will dispatch
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    //if error exists
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//LOGIN

export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
