import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import PendataanPembudidaya from './pages/PendataanPembudidaya';
import PendaftaranKelompok from './pages/PendaftaranKelompok';
import PasarRumputLaut from './pages/PasarRumputLaut';
import KonsultasiAhli from './pages/KonsultasiAhli';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pendataan-pembudidaya" element={<PendataanPembudidaya />} />
            <Route path="/pendaftaran-kelompok" element={<PendaftaranKelompok />} />
            <Route path="/pasar-rumput-laut" element={<PasarRumputLaut />} />
            <Route path="/konsultasi-dengan-ahli" element={<KonsultasiAhli />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
