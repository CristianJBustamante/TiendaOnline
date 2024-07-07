import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs,  collection, query, where, limit } from 'firebase/firestore';
import { db } from '../firebase/client';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idDistributor } = useParams()

    useEffect(() => {


        const filterProducts = idDistributor ? query(
            collection(db,"productos"),
            where("distributor", "==", idDistributor),
            limit(10)
        ) : collection(db,"productos");

        getDocs(filterProducts).then((snapshot) => {
            setProductos(snapshot.docs.map((doc)=>({ id: doc.id, ...doc.data()})));
        })


    }, [idDistributor])


    return (
        <>
            <h1>{idDistributor ? <>Distribuidor:{" " + idDistributor}</> : <>Pagina Principal</>}</h1>
            {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}
        </>
    )
}

export default ItemListContainer;