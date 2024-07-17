import React from 'react';
import './Footer.css';
import { Icon } from 'semantic-ui-react';
import logo from '../../../assets/LOGO ACTUAL.webp';

const Footer = () => {
  return (
    <footer  id='contacto'>
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <div className="contact-card">
            <div className="contact-info">
              <i className="fa fa-phone"></i>
              <p>+54 11 64764108</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-envelope"></i>
              <p>padelcrown@gmail.com</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-map-marker"></i>
              <p>Moreno, Buenos Aires, Argentina</p>
            </div>

          </div>
        </div>
        <div className="footer-column">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100091851862886" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='facebook' color="blue" size='big' />
            </a>
            <a href="https://api.whatsapp.com/send?phone=1164764108" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='whatsapp' color='green' size='big' />
            </a>
            <a href="https://www.instagram.com/padelcrown/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='instagram' color="pink" size='big' />
            </a>
            <a href="https://padelcrown.com.ar/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='shop' color='orange' size='big' />
            </a>
        </div>
        </div>
      </div>
      <div className='footer-copy'>
        <p className="footer-copy-p">&#169; 2023 - Todos los derechos reservados - Creado y Diseñado por Digital Code</p>
      </div>
    </footer>
  );
};

export default Footer;
