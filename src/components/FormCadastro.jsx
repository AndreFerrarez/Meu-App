import React, { useState } from 'react';
import './FormCadastro.css';

export default function FormCadastro() {
    const [form, setForm] = useState({ nome: '', email: '', senha: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const errs = {};
        if (!form.nome.trim()) errs.nome = 'Nome é obrigatório';
        if (!form.email.trim()) errs.email = 'Email é obrigatório';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email inválido';
        if (!form.senha) errs.senha = 'Senha é obrigatória';
        else if (form.senha.length < 6) errs.senha = 'Senha deve ter ao menos 6 caracteres';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) setSubmitted(true);
        else setSubmitted(false);
    };

    return (
        <div className="form-cadastro-container">
            <h1>Cadastro de Usuário</h1>
            {submitted ? (
                <div className="success-message">
                    <h2>Cadastro realizado com sucesso!</h2>
                    <p><strong>Nome:</strong> {form.nome}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} />
                        {errors.nome && <span className="error">{errors.nome}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" value={form.senha} onChange={handleChange} />
                        {errors.senha && <span className="error">{errors.senha}</span>}
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            )}
        </div>
    );
}
