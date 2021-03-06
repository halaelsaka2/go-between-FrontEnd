import {
  uploadImageFile,
  addNewProduct
} from "./api";
import * as productsDB from "./api";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  UPLOAD_IMAGE,
  EDIT_Amount,
  GET_DEALS,
  EDIT_DEALS
} from "./constants";

export const getAllProductsByUserIdRes = (productsList) => {
  return {
    type: GET_ALL_PRODUCTS,
    productsList,
  };
};
export const getAllProductsByUserId = (id, search, categoryId, sortBy) => {
  return async (dispatch) => {
    const productsList = await productsDB.getAllProductsByUserId(id, search, categoryId, sortBy);
    dispatch(getAllProductsByUserIdRes(productsList));
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const newproduct = await addNewProduct(product);

    dispatch(addProductRes(newproduct));
  };
};

export const addProductRes = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  };
};

export const editProduct = (id, newproduct) => {
  return async (dispatch) => {
    const {
      product
    } = await productsDB.updateProduct(id, newproduct);
    dispatch(editProductRes({
      product
    }));
  };
};

export const editProductRes = (product) => {
  return {
    type: EDIT_PRODUCT,
    product
  };
};
export const editAmount = (product) => {
  return {
    type: EDIT_Amount,
    product
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    const deletedProduct = await productsDB.deleteProduct(id);
    dispatch(deleteProductRes(deletedProduct));
  };
};
export const deleteProductRes = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  };
};

export const getPorductById = (id) => {
  return async (dispatch) => {
    const product = await productsDB.getProductById(id);
    dispatch(getProductByIdRes(product));
  };
};
export const getProductByIdRes = (product) => {
  return {
    type: GET_PRODUCT_BY_ID,
    product,
  };
};


export const getDealsProducts = (id) => {
  return async (dispatch) => {
    const dealsProductsList = await productsDB.getDealsProducts(id);
    dispatch(getDealsProductsRes(dealsProductsList));
  };
};
export const getDealsProductsRes = (dealsProductsList) => {
  return {
    type: GET_DEALS,
    dealsProductsList,
  };
};

export const uploadImage = (image) => {
  return async (dispatch) => {
    const {
      imageUrl
    } = await uploadImageFile(image);
    dispatch(uploadImageRes(imageUrl));
  };
};

export const uploadImageRes = (imageSrc) => {
  return {
    type: UPLOAD_IMAGE,
    imageSrc,
  };
};


export const editDealProduct = (id, newproduct) => {
  return async (dispatch) => {
    const {
      product
    } = await productsDB.updateProduct(id, newproduct);
    dispatch(editDealProductRes(
      product
    ));

  };
};

export const editDealProductRes = (product) => {
  return {
    type: EDIT_DEALS,
    product
  };
};