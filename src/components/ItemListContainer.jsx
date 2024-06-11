// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ItemListContainer = ({ greeting }) => {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">{greeting}</h1>
//     </div>
//   );
// };

// export default ItemListContainer;

import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { getProducts } from '../data/asyncmock';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idDistributor } = useParams()

    useEffect(() => {
        getProducts(idDistributor)
            .then(res => setProductos(res))
            .catch(err => console.error(err))
    }, [idDistributor])


    return (
        <>
            <h1>{idDistributor ? <>Distribuidor:{" " + idDistributor}</> : <>Pagina Principal</>}</h1>
            {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}
        </>
    )
}