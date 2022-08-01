import { API_KEY } from "./ApiKey";

export const Sign_Up_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const Login_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
export const Categories_List =
  "https://coffee-cafe-b443f-default-rtdb.firebaseio.com/categories.json";

export const ProductList = (category) => {
  return `https://coffee-cafe-b443f-default-rtdb.firebaseio.com/${category}.json`;
};
