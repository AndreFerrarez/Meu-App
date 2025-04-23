import React, { useReducer, useState } from 'react';
import './TarefasReducer.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), name: action.payload, completed: false }];
        case 'TOGGLE_TASK':
            return state.map(t =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            );
        default:
            return state;
    }
};

export default function TarefasReducer() {
    const [tasks, dispatch] = useReducer(reducer, []);
    const [taskName, setTaskName] = useState('');

    const handleAdd = e => {
        e.preventDefault();
        if (!taskName.trim()) return;
        dispatch({ type: 'ADD_TASK', payload: taskName.trim() });
        setTaskName('');
    };

    return (
        <div className="tarefas-reducer-container">
            <h1>Lista de Tarefas (useReducer)</h1>
            <form onSubmit={handleAdd} className="form-reducer">
                <input
                    type="text"
                    placeholder="Nova tarefa"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
            <ul className="lista-reducer">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className={task.completed ? 'completed' : ''}
                        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                    >
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
