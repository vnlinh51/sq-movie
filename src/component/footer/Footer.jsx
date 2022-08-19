import React from 'react';

import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/sqmovie.png';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content contaier">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to={'/'}>SQplay</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={'/'}>
              <i class="bx bxl-facebook-square" style={{}}></i> Facebook
            </Link>
            <Link to={'/'}>
              <i class="bx bxl-instagram"></i> Instagram
            </Link>
            <Link to={'/'}>
              <i class="bx bxl-twitter"></i> Twitter
            </Link>
            <Link to={'/'}>
              <i class="bx bxl-youtube"></i> Youtube
            </Link>
          </div>
          <div className="footer__content__menu">
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>FAQ</Link>
            <Link to={'/'}>Privacy</Link>
            <Link to={'/'}>Terms of Use</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={'/'}>Contact Us</Link>
            <Link to={'/'}>Help Center</Link>
            <Link to={'/'}>Redeem Gift Cards</Link>
            <Link to={'/'}>Investor Relations</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
