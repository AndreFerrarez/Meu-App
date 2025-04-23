import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/sobre">Sobre</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
            </ul>
        </nav>
    );
}