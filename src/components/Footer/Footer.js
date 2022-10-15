import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Shaker Sarwar</h1>
            <ul className='footer__list'>
               <li><a href='#about' className='footer__link'>About</a></li> 
               <li><a href='#portfolio' className='footer__link'>Projects</a></li> 
               <li><a href='#testimonials' className='footer__link'>Testimonials</a></li> 
            </ul>

              <div className='footer__social'>
              <a href='https://www.facebook.com/Showrav24' className='footer__social-icon' target="_blank">
              <i class="uil uil-facebook"></i>
              </a>

              <a href='https://github.com/shakerSarwar' className='footer__social-icon' target="_blank">
              <i class="uil uil-github"></i>
              </a>

              <a href='https://twitter.com/ShakerSarwar1' className='footer__social-icon' target="_blank">
              <i class="uil uil-twitter"></i>
              </a>
              </div>
            <span className="footer__copy">
            &#169; shakerSarwar. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer