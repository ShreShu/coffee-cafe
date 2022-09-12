import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../features/Actions";
import ReactLoading from "react-loading";

const Menu = () => {
  const categories = useSelector((state) => state.product.categories);
  const { isPending, isFulFilled, isErrorOccured } = useSelector(
    (state) => state.product.promise
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories());
    }
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <>
        {isPending && (
          <ReactLoading
            className="menu__promise"
            type="spinningBubbles"
            color="green"
            height={"40px"}
            width={"40px"}
          />
        )}

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
