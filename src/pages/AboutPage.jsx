import React from 'react';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <section className="mb-5">
        <h1 className="display-4 fw-bold mb-4">About E-Shop</h1>
        <p className="lead text-muted">
          We are the leading e-commerce platform dedicated to bringing you quality products at unbeatable prices.
        </p>
      </section>

      <section className="row my-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3 className="fw-bold mb-3">Our Mission</h3>
          <p className="text-muted">
            To revolutionize online shopping by providing customers with the best selection of products, 
            competitive prices, and exceptional customer service.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Our Vision</h3>
          <p className="text-muted">
            To become the most trusted e-commerce platform globally, where customers find everything they need 
            with ease and confidence.
          </p>
        </div>
      </section>

      <section className="bg-light p-4 rounded-3 my-5">
        <h3 className="fw-bold mb-4 text-center">Why Choose Us?</h3>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <h5 className="text-primary fw-bold">✨ Quality Products</h5>
            <p className="text-muted">Carefully curated selection of premium items</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-primary fw-bold">💰 Best Prices</h5>
            <p className="text-muted">Competitive pricing with regular discounts</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-primary fw-bold">🚀 Fast Delivery</h5>
            <p className="text-muted">Quick shipping to your doorstep</p>
          </div>
        </div>
      </section>

      <section className="my-5">
        <h3 className="fw-bold mb-4 text-center">Our Story</h3>
        <p className="text-muted lh-lg">
          Founded in 2024, E-Shop started with a simple goal: to make online shopping accessible, affordable, 
          and enjoyable for everyone. From humble beginnings, we've grown into a trusted platform serving 
          thousands of customers worldwide. Our commitment to excellence and customer satisfaction drives us 
          to continuously improve and innovate.
        </p>
      </section>

      <section className="bg-primary bg-opacity-10 p-4 rounded-3 text-center my-5">
        <h4 className="fw-bold mb-3">Get in Touch</h4>
        <p className="text-muted mb-3">Have questions? We'd love to hear from you!</p>
        <button className="btn btn-primary">Contact Us</button>
      </section>
    </div>
  );
};

export default AboutPage;