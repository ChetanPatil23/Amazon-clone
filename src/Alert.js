import React, { useEffect } from "react";
import "./Alert.css";
import { useGlobalContext } from "./Context";

const Alert = () => {
  const [{ showAlert }, dispatch] = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: "SHOW_ALERT",
        alert: { msg: "", show: false, id: "" },
      });
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className={showAlert.color}>
      <h3>{showAlert.msg}</h3>
    </div>
  );
};

export default Alert;
