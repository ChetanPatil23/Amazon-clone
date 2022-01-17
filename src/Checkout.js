import React from "react";
import "./Checkout.css";
import { useGlobalContext } from "./Context";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useGlobalContext();

  const removeAllItems = () => {
    let confirmToDelete = window.confirm(
      "Are you sure, you want to remove all items from the list ?"
    );
    if (confirmToDelete) {
      dispatch({
        type: "REMOVE_ALL_ITEMS",
      });
    }
  };

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout_Advertisement"
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
            <p>
              You have no items in your basket. Please add items by clicking
              'Add to Basket' button from home page
            </p>
          </div>
        ) : (
          <div>
            <div className="flex">
              <h1 className="checkout_title">Your Shopping Basket</h1>
              <button onClick={removeAllItems}>Clear All</button>
            </div>
            
            {basket.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
            
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkoutRight">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
