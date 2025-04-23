import React, { useState } from 'react';
import './EventExample.css';

export default function EventExample() {
    const [message, setMessage] = useState('');

    const handleClick = () => setMessage('Botão clicado!');

    return (
        <div className="event-example-container">
            <h2>Evento em React</h2>
            <button onClick={handleClick}>Clique em mim</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
}
