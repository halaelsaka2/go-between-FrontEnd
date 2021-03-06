import * as dropdown from "./api.mock";
import { GET_CATEGORY_LIST, GET_SORT_LIST } from "./constants";

export const getSortListRes = (sortList) => {
  return {
    type: GET_SORT_LIST,
    sortList,
  };
};
export const getSortList = () => {
  return async (dispatch) => {
    const sortList = await dropdown.getSortList();
    dispatch(getSortListRes(sortList));
  };
};

export const getCategoryListRes = (categoryList) => {
  return {
    type: GET_CATEGORY_LIST,
    categoryList,
  };
};
export const getCategoryList = () => {
  return async (dispatch) => {
    const categoryList = await dropdown.getAllCategories();
    dispatch(getCategoryListRes(categoryList));
  };
};
