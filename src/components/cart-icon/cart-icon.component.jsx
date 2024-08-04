import React from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import "./cart-icon.style.scss";

const Carticon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count ">0</span>
  </div>
);

export default Carticon;
