import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const loadCategory = () => {
    navigate(`/products/${category.link}`);
  };

  return (
    <div className="category" onClick={loadCategory}>
      <Fade>
        <div className="category__image">
          <img src={category.img} alt="" />
        </div>
        <div className="category__name">
          <p>{category.name}</p>
        </div>
      </Fade>
    </div>
  );
};

export default CategoryItem;
