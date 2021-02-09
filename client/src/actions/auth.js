import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types";
import api from "../utils/api";

//load a USER
// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

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
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err, "danger"));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//LOGIN

export const loginUser = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch(setAlert(err, "danger"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout a user

// Logout
export const logoutUser = () => ({ type: LOGOUT });
