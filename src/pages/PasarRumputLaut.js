import React from 'react';
import { Link } from 'react-router-dom';
import './PasarRumputLaut.css';
import DropdownIcon from './../assets/icon/dropdown.png'; // Sesuaikan dengan path icon dropdown
import SearchIcon from './../assets/icon/search.png'; // Sesuaikan dengan path icon search
import ProductImage1 from './../assets/produk/tali_tambang.png'; // Sesuaikan dengan path gambar produk
import ProductImage2 from './../assets/produk/tali_tambang.png'; // Sesuaikan dengan path gambar produk
import ProductImage3 from './../assets/produk/tali_tambang.png'; // Sesuaikan dengan path gambar produk

const products = [
  { id: 1, name: 'Tali Tambang 50 PE', description: 'Panjang tali 100 meter', image: ProductImage1 },
  { id: 2, name: 'Tali Tambang 50 PE', description: 'Panjang tali 100 meter', image: ProductImage2 },
  { id: 3, name: 'Tali Tambang 50 PE', description: 'Panjang tali 100 meter', image: ProductImage3 },
  // Tambahkan lebih banyak produk sesuai kebutuhan
];

const PasarRumputLaut = () => {
  return (
    <div className="pendaftaran-kelompok-page">
      <header className="pendaftaran-kelompok-header">
        <h1>Pasar Rumput Laut</h1>
      </header>
      <div className="pendaftaran-kelompok-subheading">
        <Link to="/" className="back-button">←</Link>
        <h3>Semua Kebutuhan Anda Ada Di sini</h3>
      </div>

      <div className="search-bar">
        <div className="search-category">
          <select>
            <option value="">Kategori</option>
            <option value="alat">Peralatan Budidaya</option>
            <option value="bibit">Bibit Rumput Laut</option>
            <option value="hasil">Hasil Panen Rumput Laut</option>
            {/* Tambahkan lebih banyak opsi sesuai kebutuhan */}
          </select>
          <img src={DropdownIcon} alt="Dropdown" className="dropdown-icon" />
        </div>
        <input type="text" placeholder="Cari Kebutuhan Anda..." className="search-input" />
        <button className="search-button">
          <img src={SearchIcon} alt="Search" className="search-icon" />
        </button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="product-button">Lihat Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasarRumputLaut;
