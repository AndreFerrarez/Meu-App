import React, { useState } from 'react';
import './Contato.css';

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
    const [errors, setErrors] = useState({});

    const validar = () => {
        const errs = {};
        if (!form.nome) errs.nome = 'Nome é obrigatório';
        if (!form.email) errs.email = 'Email é obrigatório';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email inválido';
        if (!form.mensagem) errs.mensagem = 'Mensagem é obrigatória';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validar()) {
            alert('Mensagem enviada com sucesso!');
            setForm({ nome: '', email: '', mensagem: '' });
            setErrors({});
        }
    };

    return (
        <div className="contato-container">
            <h1>Contato</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={form.nome} onChange={handleChange} />
                    {errors.nome && <span className="erro">{errors.nome}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="erro">{errors.email}</span>}
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} />
                    {errors.mensagem && <span className="erro">{errors.mensagem}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
