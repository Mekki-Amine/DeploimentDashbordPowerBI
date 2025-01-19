import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
            if (response.data.success) {
                navigate('/dashboard');
                const audio = new Audio('/sounds/welcome.mp3');
                audio.play();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Erreur lors de la connexion.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;