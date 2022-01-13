import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useGlobalContext } from "./Context"; 

const Header = () => {
  const [{basket}]=useGlobalContext();
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to='/login' className="header__link">
          <div className="header__option">
            <span className="header__option1">Hello Chetan</span>
            <span className="header__option2">Sign In</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
        <Link to='/checkout'className="header__link">
          <div className="header__optionbasket">
            <ShoppingBasketIcon/>
            <span className="header__option2 header__basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
