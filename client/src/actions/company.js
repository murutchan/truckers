import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_COMPANY,
  GET_COMPANIES,
  COMPANY_ERROR,
  UPDATE_LIKES,
  USER_LOADED,
} from "./types";

//create a company (dont forget about history and edit)
export const createCompany = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/company", formData);
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
  }
};

//GET ALL COMPANIES

export const getAllCompanies = () => async (dispatch) => {
  try {
    const res = await api.get("/company");
    dispatch({
      type: GET_COMPANIES,
      payload: res.data,
    });
  } catch (err) {
    // dispatch(setAlert(err.response.data, "danger"));
  }
};

//get single user companies
export const getUserCompanies = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/company/${id}`);
    dispatch({ type: GET_COMPANIES, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch(setAlert(err.response.data, "danger"));
  }
};

//LIKE A COMPANY
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/company/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.log(err.message);
    console.log({ err });
    dispatch(setAlert(err.response.data, "danger"));
  }
};

//REMOVE LIKE

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`http://localhost:5000/api/company/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
  }
};
