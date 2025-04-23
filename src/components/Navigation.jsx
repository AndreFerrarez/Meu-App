import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/visitante/Visitante">Visitante</NavLink></li>
                <li><NavLink to="/administrador/Administrador">Administrador</NavLink></li>
            </ul>
        </nav>
    );
}