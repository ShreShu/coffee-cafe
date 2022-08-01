import React from "react";
import { Fade } from "react-awesome-reveal";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="productitem">
      <Fade>
        <div className="productitem__image">
          <img src={product.img} alt="" />
        </div>
        <div className="productitem__name">
          <p>{product.name}</p>
        </div>
      </Fade>
    </div>
  );
};

export default ProductItem;
