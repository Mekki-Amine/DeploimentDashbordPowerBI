import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <img src="/logo.png" alt="Logo BeeCoders" className="logo" />
                <h4>BeeCoders</h4>
            </div>
            <ul className="nav-links">
                <li><Link to="/dashboard"><i className="fas fa-chart-bar"></i> Dashboard</Link></li>
                <li><Link to="/prediction"><i className="fas fa-file-alt"></i> Prediction</Link></li>
                <li><Link to="/frontend-react/public"><i className="fas fa-sign-out-alt"></i> Sign Out</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;