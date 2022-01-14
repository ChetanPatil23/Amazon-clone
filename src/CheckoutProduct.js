import React from "react";
import "./CheckoutProduct.css";
import { useGlobalContext } from "./Context";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{basket},dispatch] = useGlobalContext();
    const removeItem=(itemId)=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            itemId:itemId
        })
    }
  return (
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>🌟</p>
            ))}
        </div>
        <button onClick={()=>removeItem(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
