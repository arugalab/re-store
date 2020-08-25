const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ id }) => bookId === id);
  const item = cartItems.find(({ id }) => bookId === id);
  const itemIdx = cartItems.findIndex(({ id }) => bookId === id);

  const newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx),
  };
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateCartItems = (cartItems, item, itemIdx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, itemIdx), ...cartItems.slice(itemIdx + 1)];
  }

  if (itemIdx === -1) {
    return [...cartItems, item];
  }

  return [
    ...cartItems.slice(0, itemIdx),
    item,
    ...cartItems.slice(itemIdx + 1),
  ];
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
