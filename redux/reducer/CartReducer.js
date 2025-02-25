const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    let cart = localStorage.getItem("hiStudy");

    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  } else {
    return [];
  }
};

const init = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 80,
  loading: false,
  error: false,
  msg: "",
};

export const CartReducer = (state = init, action) => {
  if (action.type === "CART_REQ") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "CART_REQ_OUT") {
    return {
      ...state,
      loading: false,
    };
  } else if (action.type === "ADD_TO_CART") {
    const { id, amount, product, category } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
        msg: "already added !!!",
      };
    } else {
      const newItem = {
        id: id,
        price: product.price,
        product,
        amount,
      };

      return {
        ...state,
        cart: [...state.cart, newItem],
        msg: "item add successfully",
      };
    }
  } else if (action.type === "TOGGLE_CART_AMOUNT") {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }

          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  } else if (action.type === "COUNT_CART_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_items,
      total_amount,
    };
  } else if (action.type === "DELETE_CART_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  } else if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  } else if (action.type === "SET_CART_ERROR") {
    return {
      ...state,
      error: true,
    };
  } else if (action.type === "CLEAR_CART_ERROR") {
    return {
      ...state,
      error: false,
      msg: "",
    };
  } else {
    return state;
  }
};
