import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart size={24} />
      {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>}
    </Link>
  );
};

export default CartWidget;