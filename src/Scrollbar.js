import React from "react";
import "./Scrollbar.css";

const Scrollbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ left: 0, top: 0 });
  };
  return (
    <div className="scrollbar" onClick={scrollToTop}>
      <span>🔝</span>
      <h4> Scroll to Top </h4>
      <span>🔝</span>
    </div>
  );
};

export default Scrollbar;
