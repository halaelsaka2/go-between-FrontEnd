import {
  USER_REGISTER,
  USER_LOGIN,
  GET_ALL_ORDERS,
  ADD_TO_SHOPPING_CART,
} from "./constants";
import {
  UserLogin
} from "./api"
import {
  register,
  getAllOrders,
  addtoShoppingCart
} from "./api.mock";
import {
  editProduct
} from "../products/actions";

export const userRegister = (user) => {
  const userInfo = user;
  return async (dispatch) => {
    const user = await register(userInfo);
    dispatch(userRegisterRes(user));
  };
};
const userRegisterRes = (user) => {
  return {
    type: USER_REGISTER,
    user
  };
};

const userLoginRes = (user, token) => {
  return {
    type: USER_LOGIN,
    user,
    token
  };
};

export const userLogin = (currentUser) => {
  return async (dispatch) => {
    const userData = await UserLogin(currentUser)
    dispatch(userLoginRes(userData.user, userData.token));
  };
};



// export const ordersList = (userId) => {
//   return async (dispatch) => {
//     const ordersList = await getAllOrders(userId);
//     dispatch(orderslistRes(ordersList));
//   };
// };

// const orderslistRes = (ordersList) => {
//   return {
//     type: GET_ALL_ORDERS,
//     ordersList,
//   };
// };

// export const addToShoppingCart = (product) => {
//   return async (dispatch) => {
//     const shoppingCartList = await addtoShoppingCart(product);
//     dispatch(addToShoppingCartRes(shoppingCartList));
//   };
// };
// const addToShoppingCartRes = (shoppingCartList) => {
//   return {
//     type: ADD_TO_SHOPPING_CART,
//     shoppingCartList,
//   };
// };