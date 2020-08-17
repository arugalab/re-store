import React from "react";
import { connect } from "react-redux";

import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total }) => {
  const renderRow = (items) => {
    return items.map(({ id, title, count, total }, idx) => {
      return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderRow(items)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShoppingCartTable);
