import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './Sobre.css';

export default function Sobre() {
    const navigate = useNavigate();
    return (
        <div className="sobre-page">
            <h1>Sobre a Empresa</h1>
            <p>Esta página apresenta informações sobre nossa empresa.</p>
            <nav className="sobre-nav">
                <ul>
                    <li><Link to="equipe">Equipe</Link></li>
                    <li><Link to="servicos">Serviços</Link></li>
                </ul>
            </nav>
            <div className="sobre-content">
                <Outlet />
            </div>
            <button onClick={() => navigate('/')}>Voltar para Home</button>
        </div>
    );
}
