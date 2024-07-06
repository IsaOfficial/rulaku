import React from 'react';
import './Auth.css';
import logo from './../assets/logo.png'; // Ganti dengan path logo Anda

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo-circle">
        <img src={logo} alt="Logo" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <p>Masuk dengan akun yang sudah Anda buat</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button-login">Masuk</button>
        </form>
        <div className="login-options">
          <a href="/forgot-password">Lupa Password?</a>
          <a href="/register">Buat Akun</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
