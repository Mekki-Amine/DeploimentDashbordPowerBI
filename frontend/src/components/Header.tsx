import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Bienvenue sur BeeCoders</h1>
            <div className="user-info">
                <i className="fas fa-user-circle fa-2x text-primary"></i>
                <span>Amine Mekki</span>    
            </div>
        </header>   
    );
};

export default Header;