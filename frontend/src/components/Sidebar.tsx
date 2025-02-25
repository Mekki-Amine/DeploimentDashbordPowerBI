import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (

        <nav className="w-64 bg-gray-800 text-white p-6">
            <ul>
                <li className="mb-4">
                    <a href="/dashboard" className="flex items-center">
                        <i className="fas fa-chart-bar mr-2"></i>
                        Dashboard
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/prediction" className="flex items-center">
                        <i className="fas fa-file-alt mr-2"></i>
                        Prediction
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/signout" className="flex items-center">
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Sign Out
                    </a>
                </li>
            </ul>
        </nav>





    );
};

export default Sidebar;