import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../features/Actions";
import { Fade } from "react-awesome-reveal";
import ProductItem from "./ProductItem";
import ReactLoading from "react-loading";
import "./Product.css";
const Product = () => {
  const param = useParams();
  const category = param.category;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { isPending, isFulFilled, isErrorOccured } = useSelector(
    (state) => state.product.promise
  );

  useEffect(() => {
    dispatch(loadProducts(category));
  }, []);

  return (
    <div className="product">
      <h2 className="product__title">{category.toUpperCase()}</h2>

      {isPending && (
        <ReactLoading
          className="product__promise"
          type="spinningBubbles"
          color="green"
          height={"40px"}
          width={"40px"}
        />
      )}

      {isFulFilled &&
        products.map((product) => (
          <ProductItem key={product.keypact} product={product} />
        ))}

      {isErrorOccured && <p>Error</p>}
    </div>
  );
};

export default Product;
