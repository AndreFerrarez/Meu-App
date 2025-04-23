import React from 'react';
import { useParams } from 'react-router-dom';

export default function Visitante() {
    const { page } = useParams();
    return (
        <div className='visitor'>
            <h1>Bem-vindo à página {page}</h1>
        </div>
    );
}
