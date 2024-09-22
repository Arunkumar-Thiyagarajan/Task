import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import All from './pages/All';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;