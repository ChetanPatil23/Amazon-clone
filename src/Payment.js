import { Link } from "react-router-dom";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useGlobalContext } from "./Context";
import "./Payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useGlobalContext();
  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Gadag</p>
            <p>Karnataka</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Functionality to be worked upon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
