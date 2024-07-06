import React from 'react';
import { Link } from 'react-router-dom';
import './PendaftaranKelompok.css';
import ClipBoardPlus from './../assets/icon/clipboard-plus.png';
import SettingIcon from './../assets/icon/setting.png';


const PendaftaranKelompok = () => {
  return (
    <div className="pendaftaran-kelompok-page">
      <header className="pendaftaran-kelompok-header">
        <h1>Pendaftaran Kelompok</h1>
      </header>
      <div className="pendaftaran-kelompok-subheading">
        <Link to="/" className="back-button">←</Link>
        <h3>Daftar Kelompok</h3>
      </div>
      <table className="pendaftaran-kelompok-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kelompok</th>
            <th>Jumlah Anggota</th>
            <th>Status</th>
            <th><img src={SettingIcon} alt="Setting" className="" /></th>
          </tr>
        </thead>
        <tbody>
          {/* Data pembudidaya akan ditambahkan di sini */}
          <tr>
            <td>1</td>
            <td>Berkah Laut</td>
            <td>10</td>
            <td><img src={ClipBoardPlus} alt="John Doe" className="table-photo" /></td>
            <td>
              <button className="status-button edit">{'Lihat =>'}</button> 
            </td>
          </tr>
          {/* Tambahkan lebih banyak data pembudidaya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default PendaftaranKelompok;
