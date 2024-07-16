import { Link } from 'react-router-dom';
import './css/Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = ({ id, category, description, img, name, price, stock }) => {
    return (
        <>
            <div className="card">
                <div>{category}</div>
                <img src={img}/>
                <div>{name}</div>
                <div>{'$' + price}</div>
                <Link to={`/item/${id}`}>
                    <button type="button" className="btn btn-primary btn-card">Ver Detalle</button>
                </Link>
            </div>
        </>
    )
}