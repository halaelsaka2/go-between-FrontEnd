import * as actionTypes from "./constants";

const initialState = {
  user: {},
  shoppingCartList: [],
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state, user: action.user, token: action.token
      };
    case actionTypes.USER_REGISTER:
      return {
        ...state, user: action.user
      };
    case actionTypes.ADD_TO_SHOPPING_CART:
      return {
        ...state, shoppingCartList: action.shoppingCartList
      };
    default:
      return state;
  }
};