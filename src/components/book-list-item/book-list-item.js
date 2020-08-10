import React, { Fragment } from "react";

import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, img, price } = book;
  return (
    <Fragment>
      <div className="book-cover">
        <img src={img} alt="" />
      </div>
      <div className="book-details">
        <a href="#link" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </Fragment>
  );
};

export default BookListItem;
