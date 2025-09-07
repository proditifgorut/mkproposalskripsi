import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResearchTypes from './pages/ResearchTypes';
import ResearchApproaches from './pages/ResearchApproaches';
import DataCollection from './pages/DataCollection';
import DataAnalysis from './pages/DataAnalysis';
import MethodologyExamples from './pages/MethodologyExamples';
import ResearchTools from './pages/ResearchTools';
import ThesisProcess from './pages/ThesisProcess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jenis-penelitian" element={<ResearchTypes />} />
            <Route path="/pendekatan-penelitian" element={<ResearchApproaches />} />
            <Route path="/pengumpulan-data" element={<DataCollection />} />
            <Route path="/analisis-data" element={<DataAnalysis />} />
            <Route path="/contoh-metodologi" element={<MethodologyExamples />} />
            <Route path="/tools-penelitian" element={<ResearchTools />} />
            <Route path="/tahapan-penyusunan" element={<ThesisProcess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
