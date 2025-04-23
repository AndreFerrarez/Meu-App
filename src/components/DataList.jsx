import React, { useState, useEffect } from 'react';
import './DataList.css';

export default function DataList() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/dados.json')
            .then(res => {
                if (!res.ok) throw new Error('Erro ao carregar dados');
                return res.json();
            })
            .then(json => {
                setDados(json);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p className="erro">{error}</p>;

    return (
        <div className="datalist-container">
            <h1>Lista de Dados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, idx) => (
                        <tr key={idx}>
                            <td><img src={item.imagem} alt={item.nome} /></td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
