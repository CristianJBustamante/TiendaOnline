import React from 'react';
import { Item } from './Item';

export const ItemList = ({ productos }) => {
    return (
        <div className="contenedor">
            {productos.map((p) =>
                <Item key={p.id}
                    id={p.id}
                    category={p.category}
                    description={p.description}
                    img={p.img}
                    name={p.name}
                    price={p.price}
                    stock={p.stock} />)}
        </div>
    )
}