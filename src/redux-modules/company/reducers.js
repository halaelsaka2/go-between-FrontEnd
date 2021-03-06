import * as actionTypes from "./constants";

const initialState = {
  companyList: [],
  company: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_Companies:
      return {
        ...state,
        companyList: action.companies,
      };

    case actionTypes.ADD_Company:
      let companyList = [...state.companyList, action.company]
      return {
        ...state,
        companyList
      };
    case actionTypes.GET_Company_BY_ID:
      return {
        ...state,
        company: action.company,
      };
    case actionTypes.DELETE_Company:
      return {
        ...state,
        companyList: action.companies,
      };
    case actionTypes.EDIT_Company:
      return {
        ...state,
        companyList: action.companies,
      };
    default:
      return state;
  }
};