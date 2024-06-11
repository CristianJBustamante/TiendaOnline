import { Link } from 'react-router-dom';
import './css/Item.css';

export const Item = ({ id, category, description, img, name, price, stock }) => {
    return (
        <>
            <div className="card">
                <div>{category}</div>
                <img src={img}/>
                <div>{name}</div>
                <div>{'$' + price}</div>
                <Link to={`/item/${id}`}>
                    <button className="btn-card">Ver Detalle</button>
                </Link>
            </div>
        </>
    )
}