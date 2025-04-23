import React, { useState } from 'react';
import './Tarefas.css';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = e => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;
    const tarefa = { id: Date.now(), descricao: novaTarefa.trim(), concluida: false };
    setTarefas(prev => [...prev, tarefa]);
    setNovaTarefa('');
  };

  const toggleConcluida = id => {
    setTarefas(prev =>
      prev.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;

  return (
    <div className="tarefas-container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa} className="form-tarefas">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="lista-tarefas">
        {tarefas.map(t => (
          <li key={t.id} className={t.concluida ? 'concluida' : ''}>
            <label>
              <input
                type="checkbox"
                checked={t.concluida}
                onChange={() => toggleConcluida(t.id)}
              />
              {t.descricao}
            </label>
          </li>
        ))}
      </ul>
      <p>Total de tarefas: {total}</p>
      <p>Tarefas concluídas: {concluidas}</p>
    </div>
  );
}
