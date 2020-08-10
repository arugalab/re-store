const initalState = {
  books: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
