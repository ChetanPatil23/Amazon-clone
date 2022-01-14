export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => Number(item.price) + amount, 0);

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      let tempBasket = [...state.basket];
      const newBasket = tempBasket.filter((item) => item.id !== action.itemId);
      return {
        ...state,
        basket: newBasket,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
