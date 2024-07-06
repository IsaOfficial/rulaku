import React from 'react';
import { Link } from 'react-router-dom';
import './PendataanPembudidaya.css';

const PendataanPembudidaya = () => {
  return (
    <div className="pendataan-pembudidaya-page">
      <header className="pendataan-pembudidaya-header">
        <h1>Pendataan Pembudidaya</h1>
      </header>
      <div className="pendataan-pembudidaya-subheading">
        <Link to="/" className="back-button">←</Link>
        <h3>Lengkapi Data</h3>
      </div>
      <table className="pendataan-pembudidaya-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
            <th>Foto Diri</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Data pembudidaya akan ditambahkan di sini */}
          <tr>
            <td>John Doe</td>
            <td>johndoe</td>
            <td>johndoe@example.com</td>
            <td><img src="./../assets/upload.png" alt="John Doe" className="table-photo" /></td>
            <td>
              <button className="status-button edit">Edit</button> 
              <span> | </span>
              <button className="status-button lengkap" disabled>Lengkap</button>
            </td>
          </tr>
          {/* Tambahkan lebih banyak data pembudidaya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default PendataanPembudidaya;
