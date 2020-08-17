const initalState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    { id: 0, title: "Book 1", count: 2, total: 150 },
    { id: 1, title: "Book 2", count: 1, total: 50 },
  ],
  orderTotal: 400,
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
    default:
      return state;
  }
};

export default reducer;
