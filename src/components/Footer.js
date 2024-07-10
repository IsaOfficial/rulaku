import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="kontak" className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h3>Layanan</h3>
          <ul>
            <li>Pendataan Pembudidaya</li>
            <li>Kelompok Pembudidaya</li>
            <li>Pasar Rumput Laut</li>
            <li>Bibit Rumput Laut</li>
            <li>Konsultasi dengan Ahli</li>
            <li>Informasi Terkini</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Kontak</h3>
          <ul>
            <li><span role="img" aria-label="phone">📞</span> No. Telp: 1234567</li>
            <li><span role="img" aria-label="chat">💬</span> Admin: 08221234567</li>
            <li><span role="img" aria-label="mail">✉️</span> Email: adminrulaku@gmail.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Alamat Kami</h3>
          <p><span role="img" aria-label="location">📍</span> Jl. Taman Siswa, Pekeng, Kauman, Tahunan, Kec. Tahunan, Kabupaten Jepara, Jawa Tengah 59451</p>
        </div>
        <div className="footer-column">
          <iframe
              title="Map"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.70256353571102!2d110.69210040744885!3d-6.61695079396606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1719616719744!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
              allowFullScreen=""
              loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className='license'>
        <p>© 2024 Rumput Lautku - Komunitas Pembudidaya Rumput Laut Indonesia</p>
      </div>
    </footer>
  );
};

export default Footer;
