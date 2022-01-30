const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "BOOKS_LOADED":
            return {
                books: action.payload
            }
    }
};

export default reducer;