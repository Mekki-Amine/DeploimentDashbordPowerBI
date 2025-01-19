import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <div className="user-info">
                    <span>Amine Mekki</span>
                    <i className="fas fa-user-circle"></i>
                </div>
            </header>
            <nav className="sidebar">
                <ul>
                    <li><a href="/dashboard"><i className="fas fa-chart-bar"></i> Dashboard</a></li>
                    <li><a href="/prediction"><i className="fas fa-file-alt"></i> Prediction</a></li>
                    <li><a href="/signout"><i className="fas fa-sign-out-alt"></i> Sign Out</a></li>
                </ul>
            </nav>
            <main className="main-content">
                <iframe title="finance" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiN2Y0ZjhiYTUtMGFlOC00YzQ5LTlkNjItNTNkNDliZGQyNGRiIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9" frameBorder="0" allowFullScreen={true}></iframe>
            </main>
        </div>
    );
};

export default Dashboard;