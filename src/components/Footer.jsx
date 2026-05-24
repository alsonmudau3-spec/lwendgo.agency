import React from 'react';
import './Footer.css';

const CONTACT_INFO = {
  support: 'support@lwendgo.agency',
  customercare: 'customercare@lwendgo.agency',
};

const SOCIAL_LINKS = [
  // Add your social media links here
  // { name: 'LinkedIn', url: 'https://linkedin.com' },
  // { name: 'Twitter', url: 'https://twitter.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                📞 {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_INFO.support}`}>
                📧 {CONTACT_INFO.support}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_INFO.customercare}`}>
                🤝 {CONTACT_INFO.customercare}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        {SOCIAL_LINKS.length > 0 && (
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="links-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Lwendgo Agency. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
