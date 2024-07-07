import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    toast.success(`${quantity} ${item.name}(s) agregado(s) al carrito`);
  };

  const removeFromCart = (itemId) => {
    const itemToRemove = cart.find(item => item.id === itemId);
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    toast.error(`${itemToRemove.name} eliminado del carrito`);
  };

  const clearCart = () => {
    setCart([]);
  };


  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart ,cartQuantity }}>
        {children}
    </CartContext.Provider>
  );
};



export default CartProvider;
