import React from "react";

import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <div className="shop-header row">
      <a href="#link" className="logo text-dark">
        ReStore
      </a>
      <a href="#link" className="shopping-cart text-dark">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} items $({total})
      </a>
    </div>
  );
};

export default ShopHeader;
