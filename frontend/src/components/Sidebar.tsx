import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <div className="logo">
                <img src="/logo.png" alt="Logo BeeCoders" />
                <h4>BeeCoders</h4>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <i className="fas fa-chart-bar"></i> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/prediction">
                        <i className="fas fa-file-alt"></i> Prediction
                    </Link>
                </li>
                <li>
                    <Link to="/signout" className="text-danger">
                        <i className="fas fa-sign-out-alt"></i> Sign Out
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;