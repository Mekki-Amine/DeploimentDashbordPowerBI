import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import api from '../services/api';

const Login: React.FC = () => {
    useEffect(() => {
        gsap.fromTo(
            ".login-card",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
            ".form-field",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            //const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
            const response = await api.post('/login', { username, password });
            if (response.data.success) {
                navigate('/dashboard');
                const audio = new Audio('/sounds/Welcome.mp3');
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
            <div className="login-card">
                <h2 className="login-title">Bienvenue</h2>
                <p className="login-subtitle">Connectez-vous à votre compte</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Entrez votre email"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Connexion
                    </button>
                </form>
                <p className="login-footer">
                    Pas de compte ? <a href="#" className="signup-link">Inscrivez-vous</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
