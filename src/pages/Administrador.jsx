import React from 'react';
import { useParams } from 'react-router-dom';

export default function Administrador() {
    const { page } = useParams();
    return (
        <div className='adm'>
            <h1>Bem-vindo Administrador: {page}</h1>
        </div>
    );
}
