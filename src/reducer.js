export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => Number(item.price*item.qty) + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "REMOVE_ALL_ITEMS":
      return { ...state, basket: [] };
      break;

    case "SET_USER":
      return { ...state, user: action.user };
      break;

    case "ADD_TO_BASKET":
      let tempBask = [...state.basket];
      const findItem = tempBask.find((item) => item.id === action.item.id);

      if (findItem) {
        const newarr = tempBask.map((item) =>
          item.id === action.item.id
            ? { ...findItem, qty: findItem.qty + 1 }
            : item
        );
        return {
          ...state,
          basket: [...newarr],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
      break;

    case "REMOVE_FROM_BASKET":
      let tempBasket = [...state.basket];
      const findItemToDelete = tempBasket.find(
        (item) => item.id === action.itemId
      );

      if (Number(findItemToDelete.qty) === 1) {
        const newBasket = tempBasket.filter(
          (item) => item.id !== action.itemId
        );
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        const newarr = tempBasket.map((item) =>
          item.id === action.itemId
            ? { ...findItemToDelete, qty: findItemToDelete.qty - 1 }
            : item
        );
        return {
          ...state,
          basket: [...newarr],
        };
      }
      break;
      case "REMOVE_COMPLETE_ITEM_FROM_BASKET":
        const arrayItems=[...state.basket];
        const newBasket = arrayItems.filter(
          (item) => item.id !== action.itemId
        );
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
