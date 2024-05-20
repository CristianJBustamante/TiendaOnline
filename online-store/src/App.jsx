import React from 'react';
import Navbar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;
