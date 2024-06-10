// import React from 'react';
// import Navbar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
//     </div>
//   );
// };

// export default App;

import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { Error404 } from './components/Error404';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/redes' element={<h1>Instagram @coder</h1>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
