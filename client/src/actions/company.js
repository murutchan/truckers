import { appendErrors } from "react-hook-form";
import api from "../utils/api";
import { setAlert } from "./alert";

import { GET_COMPANY, GET_COMPANIES } from "./types";

//create a company (dont forget about history and edit)
export const createCompany = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/company", formData);
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.errors, "danger"));
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
    console.log(err);
    dispatch(setAlert(err.errors, "danger"));
  }
};
