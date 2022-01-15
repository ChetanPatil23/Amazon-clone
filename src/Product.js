import React from "react";
import "./Product.css";
import { useGlobalContext } from "./Context";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket, user }, dispatch] = useGlobalContext();

  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      });
    } else {
      alert("Please Sign-In to Add Items to the Basket");
    }
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
