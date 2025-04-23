import React, { useState, useLayoutEffect, useRef } from 'react';
import './UseLayoutEffectExample.css';

export default function UseLayoutEffectExample() {
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');
    const buttonRef = useRef();

    useLayoutEffect(() => {
        if (message && buttonRef.current) {
            buttonRef.current.classList.add('clicked-effect');
            const id = setTimeout(() => {
                buttonRef.current.classList.remove('clicked-effect');
            }, 200);
            return () => clearTimeout(id);
        }
    }, [message]);

    const handleClick = () => {
        setMessage(inputText);
    };

    return (
        <div className="layout-effect-container">
            <input
                type="text"
                placeholder="Digite algo..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button ref={buttonRef} onClick={handleClick}>Exibir Mensagem</button>
            {message && <div className="message-box">{message}</div>}
        </div>
    );
}
