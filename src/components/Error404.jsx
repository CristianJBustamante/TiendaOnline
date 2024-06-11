import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
    return (
        <>
            <h1>Ups!. Error 404. Pagina no encontrada💀</h1>
            <Link to={'/'}> Volver al Home </Link>
        </>
    )
}