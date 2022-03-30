import React from "react";
import "./Product.css";
import { useGlobalContext } from "./Context";
import Alert from "./Alert";

const Product = ({ id, title, image, price, rating, qty }) => {
  const [{ basket, showAlert }, dispatch] = useGlobalContext();

  const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          price,
          rating,
          qty,
        },
      });
      dispatch({
        type: "SHOW_ALERT",
        alert: {
          show: true,
          msg: "Item added to Basket",
          id: id,
          color: "green",
        },
      });
    
  };
  return (
    <div className="product">
      {showAlert.show && showAlert.id == id && <Alert />}
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
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
