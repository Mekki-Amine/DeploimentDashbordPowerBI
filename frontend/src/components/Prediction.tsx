import React, { useState } from 'react';
import axios from 'axios';

const Prediction: React.FC = () => {
    const [tva, setTva] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/predict', { tva });
            setResult(response.data.prediction);
        } catch (error) {
            alert('Erreur lors de la prédiction.');
        }
    };

    return (
        <div className="prediction-container">
            <header className="header">
                <img src="/logo.png" alt="Logo" className="logo" />
                <div className="user-info">
                    <span>Amine Mekki</span>
                    <i className="fas fa-user-circle"></i>
                </div>
            </header>
            <nav className="sidebar">
                <ul>
                    <li><a href="/dashboard"><i className="fas fa-chart-bar"></i> Dashboard</a></li>
                    <li><a href="/prediction"><i className="fas fa-file-alt"></i> Prediction</a></li>
                    <li><a href="/signout"><i className="fas fa-sign-out-alt"></i> Sign Out</a></li>
                </ul>
            </nav>
            <main className="main-content">
                <h1>Prédiction</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>TVA</label>
                        <input type="text" value={tva} onChange={(e) => setTva(e.target.value)} required />
                    </div>
                    <button type="submit">Prédire</button>
                </form>
                {result !== null && (
                    <div className="result">
                        Résultat du recouvrement : <strong>{result}</strong>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Prediction;