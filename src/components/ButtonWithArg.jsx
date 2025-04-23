import React, { useState } from 'react';
import './ButtonWithArg.css';

export default function ButtonWithArg() {
    const [message, setMessage] = useState('');

    const handleClick = userName => {
        setMessage(`Olá, ${userName}! Você clicou no botão.`);
    };

    return (
        <div className="button-arg-container">
            <h2>Função Arrow com Argumentos</h2>
            <button onClick={() => handleClick('Alice')}>Saudar Alice</button>
            <button onClick={() => handleClick('Bob')}>Saudar Bob</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
}
