import React from 'react';
import { Link } from 'react-router-dom';
import './KonsultasiAhli.css';
import SearchIcon from './../assets/icon/search.png'; // Sesuaikan dengan path icon search
import ahli1 from './../assets/ahli/darmawan.jpg'; // Sesuaikan dengan path gambar produk
import ahli2 from './../assets/ahli/alex_horf.jpg'; // Sesuaikan dengan path gambar produk
import ahli3 from './../assets/ahli/halim_kusuma.jpg'; // Sesuaikan dengan path gambar produk

const ahli = [
  { id: 1, name: 'Tali Tambang 50 PE', description: 'Konsultasikan budidaya rumput laut anda bersama para ahli', image: ahli1 },
  { id: 2, name: 'Tali Tambang 50 PE', description: 'Konsultasikan budidaya rumput laut anda bersama para ahli', image: ahli2 },
  { id: 3, name: 'Tali Tambang 50 PE', description: 'Konsultasikan budidaya rumput laut anda bersama para ahli', image: ahli3 },
  // Tambahkan lebih banyak produk sesuai kebutuhan
];

const KonsultasiAhli = () => {
  return (
    <div className="konsultasi-ahli-page">
      <header className="konsultasi-ahli-header">
        <h1>Konsultasi dengan Ahli Rumput Laut</h1>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Cari nama konsultan..." className="search-input" />
        <button className="search-button">
          <img src={SearchIcon} alt="Search" className="search-icon" />
        </button>
      </div>

      <div className="ahli-grid">
        {ahli.map(ahli => (
          <div key={ahli.id} className="ahli-container">
            <img src={ahli.image} alt={ahli.name} className="ahli-image" />
            <div className="ahli-content">
              <h3>{ahli.name}</h3>
              <p>{ahli.description}</p>
              <button className="ahli-button">Hubungi Sekarang</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KonsultasiAhli;
