import React, { useState, useEffect } from 'react';
import './ValueWatcher.css';

export default function ValueWatcher() {
    const [value, setValue] = useState('');
    const [log, setLog] = useState([]);

    useEffect(() => {
        if (value !== '') {
            setLog(prev => [...prev, `Valor mudou para: ${value}`]);
        }
    }, [value]);

    return (
        <div className="value-watcher-container">
            <h2>Monitor de Valor</h2>
            <input
                type="text"
                placeholder="Digite um valor"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <ul className="log-list">
                {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
            </ul>
        </div>
    );
}
