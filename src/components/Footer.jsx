import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto pt-5 pb-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">🛍️ E-Shop</h5>
            <p className="text-muted">Your one-stop shop for quality products at great prices.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-muted">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-light">📘</a>
              <a href="#" className="btn btn-sm btn-outline-light">𝕏</a>
              <a href="#" className="btn btn-sm btn-outline-light">📷</a>
              <a href="#" className="btn btn-sm btn-outline-light">💼</a>
            </div>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center text-muted py-3">
          <p>&copy; {currentYear} E-Shop. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;