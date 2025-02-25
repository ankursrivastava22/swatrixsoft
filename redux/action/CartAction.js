// -----------------> ADD_TO_CART
export const addToCartAction = (id, amount, product) => async (dispatch) => {
  try {
    dispatch({ type: "CART_REQ" });

    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, product },
    });

    dispatch({ type: "CART_REQ_OUT" });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "SET_CART_ERROR" });
  }
};

// -----------------> Inc/Dec Cart Amount
export const toggleAmount = (id, value) => async (dispatch) => {
  try {
    dispatch({ type: "CART_REQ" });

    dispatch({ type: "TOGGLE_CART_AMOUNT", payload: { id, value } });

    dispatch({ type: "CART_REQ_OUT" });
  } catch (error) {
    dispatch({ type: "SET_CART_ERROR" });
  }
};

// -----------------> Delete_Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "CART_REQ" });

    dispatch({ type: "DELETE_CART_ITEM", payload: id });

    dispatch({ type: "CART_REQ_OUT" });
  } catch (error) {
    dispatch({ type: "SET_CART_ERROR" });
  }
};
