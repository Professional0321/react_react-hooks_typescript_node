import React, { createContext , useState, useEffect, useCallback } from 'react';

import ShopItem from '../../interface/shop-item.interface';

import { 
  addItemToCart, 
  removeItemFromCart,
  addPriceToTotal,
  removePriceFromTotal,
  addItemToCount,
  removeItemFromCount,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotalCost
} from './cart.utils';

interface ICart {
  hidden: boolean,
  toggleHidden: Function,
  cartItems: ShopItem[] | [],
  addItem: Function,
  removeItem: Function,
  clearCartItem: Function ,
  cartItemsCount: number,
  totalCost: number,
}

interface ICartProps {
  children: React.ReactNode;
}

export const CartContext = createContext<ICart>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCartItem: () => {},
  cartItemsCount: 0,
  totalCost: 0
})

const CartProvider: React.FC<ICartProps> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Array<ShopItem|any>> ([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0)

  const toggleHidden = () => setHidden(!hidden);

  const addItem = (item: ShopItem) => {
    setCartItems(addItemToCart(cartItems, item));
    setTotalCost(addPriceToTotal(totalCost, item.price));
    setCartItemsCount(addItemToCount(cartItemsCount, 1));
    console.log(cartItems);
  };

  const removeItem = (item: ShopItem) => {
    setCartItems(removeItemFromCart(cartItems, item));
    setTotalCost(removePriceFromTotal(totalCost, item.price));
    setCartItemsCount(removeItemFromCount(cartItemsCount, 1));
  };

  const clearCartItem = (item: ShopItem) => setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setTotalCost(getCartTotalCost(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{ hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, totalCost, clearCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;