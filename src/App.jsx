import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import {Error404} from './components/Error404';
import Checkout from './components/Checkout';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/distributor/:idDistributor' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
