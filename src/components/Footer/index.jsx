import React from 'react'
import logo from '../../assets/images/logo.png';
import footer from './footer.css';

function Footer() {
    return (
    <div className='footer' style={footer}>
      <div className='footer__logo'>
          <img src={logo} alt='logo-kasa' className='logo' />
      </div>
    </div>
  
    )
  }
  
  export default Footer