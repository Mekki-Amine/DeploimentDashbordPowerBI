import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="header">
            <h5>Bienvenue sur BeeCoders</h5>
            <div className="user-info">
                <i className="fas fa-user-circle"></i>
                <span>Amine Mekki</span>
            </div>
        </header>
    );
}

export default Header;
