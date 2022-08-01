import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../features/Actions";
import { Fade } from "react-awesome-reveal";
import ProductItem from "./ProductItem";
import "./Product.css";
const Product = () => {
  const param = useParams();
  const category = param.category;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(loadProducts(category));
  }, []);

  return (
    <div className="product">
      <Fade>
        <h2 className="product__title">{category.toUpperCase()}</h2>
        {products.map((product) => (
          <ProductItem key={product.keypact} product={product} />
        ))}
      </Fade>
    </div>
  );
};

export default Product;
