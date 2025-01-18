import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h5>Bienvenue sur BeeCoders</h5>
            <div className="user-info">
                <i className="fas fa-user-circle fa-2x text-primary"></i>
                <span>Amine Mekki</span>
            </div>
        </header>
    );
};

export default Header;