import React from 'react';
import './Auth.css';
import logo from './../assets/logo.png'; // Ganti dengan path logo Anda

const Register = () => {
  return (
    <div className="login-page">
        <div className="logo-circle">
          <img src={logo} alt="Logo" />
        </div>
      <div className="login-container">
        <h2>Daftar Akun Rumput Lautku</h2>
        <p>Isikan data diri Anda dengan lengkap dan benar</p>
        <form>
          <input id="namalengkap" type="text" placeholder="Nama Lengkap" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Konfirmasi Password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Saya sudah membaca dan menyetujui semua kebijakan pengguna</label>
          </div>
          <button type="submit" className="button-login">Daftar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
