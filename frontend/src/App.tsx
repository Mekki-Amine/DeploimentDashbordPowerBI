import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Prediction from './components/Prediction';
import Header from './components/Header';



const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/signout" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;