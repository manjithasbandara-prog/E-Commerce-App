import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On orders over $50',
      color: '#667eea'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Secure Checkout',
      description: '100% secure transactions',
      color: '#764ba2'
    },
    {
      id: 3,
      icon: '↩️',
      title: '30-Day Returns',
      description: 'Easy returns & exchanges',
      color: '#f093fb'
    },
    {
      id: 4,
      icon: '💬',
      title: '24/7 Support',
      description: 'Dedicated customer service',
      color: '#4facfe'
    }
  ];

  return (
    <section className="features py-5 bg-light rounded-3 my-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Why Choose Us?</h2>
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-6 col-lg-3">
              <div className="feature-card text-center h-100 p-4 bg-white rounded shadow-sm" 
                style={{
                  border: `2px solid ${feature.color}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h5 className="fw-bold mb-2" style={{ color: feature.color }}>{feature.title}</h5>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;