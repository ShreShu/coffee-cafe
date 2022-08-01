import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Categories_List } from "../Apis/URLs";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import "./Menu.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../features/Actions";

const Menu = () => {
  const categories = useSelector((state) => state.product.categories);
  const { isPending, isFulFilled, isErrorOccured } = useSelector(
    (state) => state.product.promise
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <>
        {isPending && <p>Loading</p>}

        {isFulFilled &&
          categories.map((category) => (
            <CategoryItem key={category.key} category={category} />
          ))}

        {isErrorOccured && <p>Error</p>}
      </>
    </div>
  );
};

export default Menu;
