import React from 'react';
import './Footer.css'; // Import your custom CSS file for styling

import img1 from '../../assets/images/h2.png'
import img2 from '../../assets/images/h3.png'
import img3 from '../../assets/images/home-img.png'
import img4 from '../../assets/images/h2.png'
import img5 from '../../assets/images/h3.png'
import img6 from '../../assets/images/home-img.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget dignissim ligula. Phasellus vestibulum lorem eget pulvinar euismod.</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fa fa-map-marker-alt"></i>123 Street, City, Country</p>
            <p><i className="fa fa-phone-alt"></i>+123 456 7890</p>
            <p><i className="fa fa-envelope"></i>info@example.com</p>
            <p><i className="far fa-clock"></i>Mon - Fri, 9AM - 6PM</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Latest Projects</h3>
            <div className="footer-project-images">
              <img src={img1} alt="Project 2" />
              <img src={img2} alt="Project 3" />
              <img src={img3} alt="Project 4" />
              <img src={img4} alt="Project 5" />
              <img src={img5} alt="Project 6" />
              <img src={img6} alt="Project 1" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="container">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="footer-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="containe-last">
          <div className="copy-menu">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
