import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section bg-gradient text-white text-center py-5 mb-4" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '10px'
    }}>
      <h1 className="display-4 fw-bold mb-3">Welcome to E-Shop</h1>
      <p className="fs-5 mb-4 lead">Discover amazing products at unbeatable prices. Shop with confidence!</p>
      <div>
        <Link to="/products" className="btn btn-light btn-lg me-3">
          🛍️ Shop Now
        </Link>
        <Link to="/about" className="btn btn-outline-light btn-lg">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;