export const addPriceToTotal = (totalCost, cartItemPrice) => {
  return totalCost + cartItemPrice;
}

export const removePriceFromTotal = (totalCost, cartItemPrice) => {
  return totalCost - cartItemPrice;
}

export const addItemToCount = (cartItemCount, number) => {
  return cartItemCount + number;
}

export const removeItemFromCount = (cartItemCount, number) => {
  return cartItemCount - number;
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  let newCartItems;
  let newCartTotalCost;
  let newCartCount;

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  newCartTotalCost = existingCartItem.quantity * existingCartItem.price;
  newCartCount = existingCartItem.quantity

  if (existingCartItem) {
    newCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  } else {
    newCartItems = cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - cartItem.quantity}
        : cartItem
    );
  }

  return [newCartItems, newCartTotalCost, newCartCount];
}


export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);

export const getCartItemsCount = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );