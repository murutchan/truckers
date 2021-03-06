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
export const createCompany = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const res = await api.post("/company", formData);
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "Company Updated" : "Company Created", "success"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
  }
};

//delete a company
export const deleteCompany = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/company/${id}`);
    dispatch(setAlert("Company Deleted", "success"));
  } catch (err) {
    console.log({ err });
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

    dispatch(setAlert(err.response, "danger"));
  }
};

//get single company

export const getCompany = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/company/single/${id}`);
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
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
