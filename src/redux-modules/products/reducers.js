import * as actionTypes from "./constants";

const initialState = {
  productsList: [],
  sortList: [],
  categoryList: [],
  imageSrc: "",
  product: {},
  editedProduct: "",
  dealsProductsList: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        productsList: action.productsList,
      };
    case actionTypes.ADD_PRODUCT:
      const productsList = [...state.productsList, action.product];
      return {
        ...state,
        productsList,
      };
    case actionTypes.DELETE_PRODUCT:
      const newproductsList = state.productsList.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        productsList: newproductsList,
      };
    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        editedProduct: action.product,
      };
    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.EDIT_Amount:
      const oldproduct = state.productsList.find(
        (product) => product.id === action.product.id
      );
      const index = state.productsList.indexOf(oldproduct);
      const productList = [...state.productsList];
      productList[index] = action.product;
      return {
        ...state,
        productsList: productList,
      };

    case actionTypes.EDIT_DEALS:
      const oldDeal = state.dealsProductsList.find(
        product => product.id === action.product.id
      );
      let dealsProductsList = [...state.dealsProductsList];
      dealsProductsList.push(oldDeal)
      const dealIndex = state.dealsProductsList.indexOf(oldDeal);
      dealsProductsList = dealsProductsList.filter(dealItem => dealItem !== dealsProductsList[dealIndex])
      const oldDealproduct = state.productsList.find(
        (product) => product.id === action.product.id
      );
      const productIndex = state.productsList.indexOf(oldDealproduct);
      const productListForDeals = [...state.productsList];
      productListForDeals[productIndex] = action.product;
      return {
        ...state,
        dealsProductsList: dealsProductsList,
          productsList: productListForDeals
      }

      case actionTypes.UPLOAD_IMAGE:
        return {
          ...state,
          imageSrc: action.imageSrc,
        };

      case actionTypes.GET_DEALS:
        return {
          ...state,
          dealsProductsList: action.dealsProductsList
        }
        default:
          return state;
  }
};