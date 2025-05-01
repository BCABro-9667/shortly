import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">Shortly</div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li><a href="/">Link Shortening</a></li>
              <li><a href="/">Branded Links</a></li>
              <li><a href="/">Analytics</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          
          {/* <div className="footer-social">
            <a href="/"><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
            <a href="/"><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
            <a href="/"><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a>
            <a href="/"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
          </div> */}
        </div>
      </div>
      <hr className='divider' />
     <div className="bottom">
     <p>&copy; 2025 Shortly. All rights reserved.</p>
     <p>Made with ❤️ by Avdhesh Kumar</p>
     </div>
    </footer>
  );
};

export default Footer;