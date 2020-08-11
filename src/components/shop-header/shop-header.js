import React from "react";
import { Link } from "react-router-dom";

import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <div className="shop-header row">
      <Link to="/" className="logo text-dark">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart text-dark">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} items $({total})
      </Link>
    </div>
  );
};

export default ShopHeader;
