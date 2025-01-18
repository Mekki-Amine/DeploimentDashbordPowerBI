import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === 'amine@sesame.tn' && password === 'amine') {
            navigate('/dashboard');
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect.");
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h3>Connexion</h3>
                <input
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;