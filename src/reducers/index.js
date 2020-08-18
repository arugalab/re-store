const initalState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 400,
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

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => bookId === id);
  const item = cartItems.find(({ id }) => bookId === id);
  const itemIdx = cartItems.findIndex(({ id }) => bookId === id);

  const newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx),
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      console.log(`${action.payload}`);

    default:
      return state;
  }
};

export default reducer;
