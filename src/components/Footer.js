import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
          
          <div class='footer-links'>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <h2>Contacto</h2>
                <a href='mailto:fernando@elkiloycuarto.com'>Trabaja con nosotros</a>
                <a href='mailto:juanjo@elkiloycuarto.com'>Sugerencias</a>
                <a href='mailto:juanjo@elkiloycuarto.com'>Encargos</a>
              </div>
              <div class='footer-link-items'>
                <h2>Sobre nosotros</h2>
                <Link to='/info'>¿Quiénes somos?</Link>
                <Link to='/'>¿Por qué Kilo y cuarto?</Link>
                <Link to='/'>¿Está Esteven soltero?</Link>
              </div>
            </div>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <h2>RRSS</h2>
                <a href= 'https://instagram.com/elkiloycuarto'  target="blank">Instagram</a>
                <a href='https://facebook.com/elkiloycuarto'  target="blank">Facebook</a>
                <a href='https://linkedin.com/elkiloycuarto'  target="blank">LinkedIn</a>
              </div>
            </div>
          </div>
          <section class='social-media'>
            <div class='social-media-wrap'>
              <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                  <img className='logo-footer' src="/images/logo kyc.png" alt="logo" height={150} width={150}/>
                  Kilo y Cuarto
                </Link>
              </div>
              <div class='social-icons'>
                <Link
                  class='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i class='fab fa-facebook-f' />
                </Link>
                <Link
                  class='social-icon-link instagram'
                  to='/https://instagram.com/elkiloycuarto'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i class='fab fa-instagram' />
                </Link>
                <Link
                  class='social-icon-link youtube'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <i class='fab fa-youtube' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i class='fab fa-twitter' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>
      <small class='website-rights'>Kilo y cuarto S.L. © 1994</small>
            </div>
          </section>
        </div>
      );
    }
    
    export default Footer;