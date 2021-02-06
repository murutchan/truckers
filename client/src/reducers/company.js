import { GET_COMPANY, GET_COMPANIES } from "../actions/types";

const initialState = {
  company: null,
  companies: [],
  error: {},
};

function companyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANY:
      return {
        ...state,
        company: payload,
      };
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
      };
    default:
      return state;
  }
}

//add likes

export default companyReducer;
