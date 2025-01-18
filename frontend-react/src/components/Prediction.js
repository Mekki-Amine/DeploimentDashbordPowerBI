import React, { useState } from 'react';

function Prediction() {
    const [tva, setTva] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tva })
        });
        const data = await response.json();
        setResult(data.prediction);
    };

    return (
        <div className="prediction">
            <h1>Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>TVA</label>
                    <input
                        type="text"
                        value={tva}
                        onChange={(e) => setTva(e.target.value)}
                        placeholder="Entrez la valeur de la TVA"
                        required
                    />
                </div>
                <button type="submit">Prédire</button>
            </form>
            {result && <div className="result">Résultat : {result}</div>}
        </div>
    );
}

export default Prediction;