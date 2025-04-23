import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: 'center', margin: '2rem' }}>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    );
}

