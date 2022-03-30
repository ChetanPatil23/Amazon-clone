import React, {useState,useEffect} from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useGlobalContext } from "./Context";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const [{ basket, user }, dispatch] = useGlobalContext();
  const history=useHistory();

  const checkout=(e)=>{
    if(user){
    history.push('/payment')
    }
    else{
      alert("Please Click on SignIn to 'Create an Account or SignIn' to proceed with Checkout");
    }
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={checkout}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
