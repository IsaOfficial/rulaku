import React from 'react';
import './Home.css';
import PendataanPembudidaya from './../assets/layanan/pendataan_pembudidaya.png';
import KelompokPembudidaya from './../assets/layanan/kelompok_pembudidaya.png';
import PasarRumputLaut from './../assets/layanan/pasar_rumput_laut.png';
import BibitRumputLaut from './../assets/layanan/bibit_rumput_laut.png';
import KonsultasiAhli from './../assets/layanan/konsultasi_ahli.png';
import InformasiTerkini from './../assets/layanan/informasi_terkini.png';
import NewsImage from './../assets/berita/budidaya.jpg';

const Home = () => {
  return (
    <div className="App">
      <div className="banner">
        <div className="banner-content">
          <h1 className='komunitas'>KOMUNITAS</h1>
          <h1>RUMPUT LAUT</h1>
          <h1 className='indonesia'>INDONESIA</h1>
          <p>"Membangun Blue Economy Indonesia Jadi Lebih Baik"</p>
          <a href="#layanan" className="oval-button">Layanan Kami</a>
        </div>
      </div>

      <div id="layanan" className="service-section">
        <h2>Pembudidaya Rumput Laut GO Digital</h2>
        <p>
          Di Rumput Lautku, Anda bisa mengembangkan usaha rumput laut menjadi lebih maju dan berkembang. Kami menyediakan fitur-fitur yang dapat membantu Anda dalam manajemen kelompok pembudidaya, edukasi, dan konsultasi.
        </p>

        <div className="service-grid">
            <div className="service-container">
                <img src={PendataanPembudidaya} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Pendataan Pembudidaya</h3>
                    <p>Isi data diri Anda untuk mengakses layanan kami.</p>
                    <a href="/pendataan-pembudidaya" className="service-button">Daftar Sekarang</a>
                </div>
            </div>
            <div className="service-container">
                <img src={KelompokPembudidaya} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Kelompok Pembudidaya</h3>
                    <p>Daftar menjadi anggota kelompok pembudidaya.</p>
                    <a href="/pendaftaran-kelompok" className="service-button">Daftar Sekarang</a>
                </div>
            </div>
            <div className="service-container">
                <img src={PasarRumputLaut} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Pasar Rumput Laut</h3>
                    <p>Cek pasar rumput laut di Indonesia.</p>
                    <a href="/pasar-rumput-laut" className="service-button">Cek Sekarang</a>
                </div>
            </div>
            <div className="service-container">
                <img src={BibitRumputLaut} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Bibit Rumput Laut</h3>
                    <p>Cek bibit rumput laut unggul.</p>
                    <a href="#" className="service-button">Cek Sekarang</a>
                </div>
            </div>
            <div className="service-container">
                <img src={KonsultasiAhli} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Konsultasi dengan Ahli</h3>
                    <p>Konsultasikan budidaya Anda dengan ahli rumput laut Indonesia.</p>
                    <a href="#" className="service-button">Konsultasi Sekarang</a>
                </div>
            </div>
            <div className="service-container">
                <img src={InformasiTerkini} alt="Gambar" className="service-image" />
                <div className="service-content">
                    <h3>Informasi Terkini</h3>
                    <p>Informasi terkini tentang dunia bisnis dan budidaya di Indonesia.</p>
                    <a href="#" className="service-button">Lihat Sekarang</a>
                </div>
            </div>
        </div>
      </div>

      <div className='gap'></div>

      <div id="berita" className="news-section">
        <h2>Informasi dan Berita Terkini</h2>
        <p>Tetap update dengan informasi dan berita terkini.</p>

        <div className="news-grid">
            <div className="news-container">
              <img src={NewsImage} alt="Gambar Berita" className="news-image" />
              <div className="news-content">  
                <h3>Judul Berita</h3>
                <p className="news-date">Hari, 30 Juni 2024 | Admin</p>
                <p>Isi singkat mengenai berita ini. Informasi lebih lanjut tentang topik yang dibahas.</p>
              </div>
            </div>
            <div className="news-container">
              <img src={NewsImage} alt="Gambar Berita" className="news-image" />
              <div className="news-content"> 
                <h3>Judul Berita</h3>
                <p className="news-date">Hari, 30 Juni 2024 | Admin</p>
                <p>Isi singkat mengenai berita ini. Informasi lebih lanjut tentang topik yang dibahas.</p>
              </div>
            </div>
        </div>

        <div className='news-button-container'>
          <a href="#" className="news-button">Lihat Selengkapnya</a>
        </div>
      </div>
    </div>

    
    
  );
};

export default Home;
