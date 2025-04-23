import React, { useState } from 'react';
import './FormValidation.css';

export default function FormValidation() {
    const [values, setValues] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: '', email: '' });
    const [touched, setTouched] = useState({ name: false, email: false });

    const validateName = name => {
        if (!name.trim()) return 'Nome é obrigatório';
        if (!/^[A-Za-zÀ-ÿ ñÑ]+$/.test(name)) return 'Nome não pode conter caracteres especiais ou números';
        return '';
    };

    const validateEmail = email => {
        if (!email.trim()) return 'Email é obrigatório';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email inválido';
        return '';
    };

    const handleBlur = e => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = name === 'name' ? validateName(values.name) : validateEmail(values.email);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const error = name === 'name' ? validateName(value) : validateEmail(value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const isFormValid = () => !validateName(values.name) && !validateEmail(values.email);

    const handleSubmit = e => {
        e.preventDefault();
        setTouched({ name: true, email: true });
        const nameErr = validateName(values.name);
        const emailErr = validateEmail(values.email);
        setErrors({ name: nameErr, email: emailErr });
        if (!nameErr && !emailErr) {
            alert(`Formulário enviado!\nNome: ${values.name}\nEmail: ${values.email}`);
        }
    };

    return (
        <div className="form-validation-container">
            <h1>Validação em Tempo Real</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <button type="submit" disabled={!isFormValid()}>Enviar</button>
            </form>
        </div>
    );
}
