import { GET_COMPANY, GET_COMPANIES, UPDATE_LIKES } from "../actions/types";

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
    case UPDATE_LIKES:
      return {
        ...state,
        companies: state.companies.map((company) =>
          company._id === payload.id
            ? { ...company, likes: payload.likes }
            : company
        ),
        loading: false,
      };
    default:
      return state;
  }
}

//add likes

export default companyReducer;
