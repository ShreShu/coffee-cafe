import { productActions } from "./productSlice";
import axios from "axios";
import { Categories_List, ProductList } from "../Apis/URLs";
export const loadCategories = () => {
  return async (dispatch) => {
    const sendReq = async () => {
      try {
        dispatch(productActions.pending());
        const res = await axios.get(Categories_List);
        let arrayOfObj = Object.keys(res.data)?.map((key) => {
          return { ...res.data[key], key };
        });
        dispatch(productActions.fullfilled());
        dispatch(productActions.loadcategories(arrayOfObj));
      } catch (e) {
        dispatch(productActions.error());
      }
    };

    sendReq();
  };
};

export const loadProducts = (category) => {
  return async (dispatch) => {
    const sendReq = async () => {
      try {
        dispatch(productActions.pending());
        const url = ProductList(category);
        const res = await axios.get(url);
        dispatch(productActions.fullfilled());
        if (res.data === null || res.data.length === 0) {
          dispatch(productActions.loadProducts([]));
        } else {
          let arrayOfObj = Object.keys(res.data)?.map((key) => {
            return { ...res.data[key], key };
          });
          dispatch(productActions.loadProducts(arrayOfObj));
        }
      } catch (e) {
        dispatch(productActions.error());
      }
    };

    sendReq();
  };
};
