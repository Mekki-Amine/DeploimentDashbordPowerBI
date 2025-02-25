import React from 'react';
import logo from "./logo.png"
import Header from './Header';
import Sidebar from './Sidebar';
const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="flex h-screen">
                <Sidebar />
                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-100">
                    <iframe
                        title="finance"
                        width="600"
                        height="373.5"
                        src="https://app.powerbi.com/view?r=eyJrIjoiN2Y0ZjhiYTUtMGFlOC00YzQ5LTlkNjItNTNkNDliZGQyNGRiIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9"
                        frameBorder="0"
                        allowFullScreen={true}
                    ></iframe>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;