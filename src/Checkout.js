import React from "react";
import "./Checkout.css";
import { useGlobalContext } from "./Context";
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket }, dispatch] = useGlobalContext();

  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="Checkout_Advertisement"
      />
      {basket?.length === 0 ? (
        <div>
          <h1>Your Shopping Basket is empty</h1>
          <p>
            You have no items in your basket. Please add items by clicking 'Add
            to Basket' button from home page
          </p>
        </div>
      ) : (
        <div>
          <h1 className="checkout_title">Your Shopping Basket</h1>
          {basket.map((item) => (
            <CheckoutProduct key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
