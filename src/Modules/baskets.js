const ADD_BASKET = "add_basket";
const REMOVE_BASKET = "remove_basket";

export const addBasket = (item) => ({ type: ADD_BASKET, payload: item });
export const removeBasket = (id) => ({ type: REMOVE_BASKET, payload: id });

const initialState = [];

function baskets(state = initialState, action) {
  switch (action.type) {
    case ADD_BASKET:
      return [...state, action.payload];
    case REMOVE_BASKET:
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}

export default baskets;
