import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Verified Buyer',
      avatar: '👩‍💼',
      text: 'Great quality products and fast shipping! Highly recommended.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Regular Customer',
      avatar: '👨‍💼',
      text: 'Excellent customer service. They resolved my issue quickly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Happy Shopper',
      avatar: '👩‍🦰',
      text: 'Love the variety of products. Will definitely shop again!',
      rating: 4,
    },
  ];

  return (
    <section className="testimonials py-5 bg-light rounded-3 my-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">What Our Customers Say</h2>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0" style={{
                transition: 'transform 0.3s',
                borderTop: '3px solid #667eea'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body">
                  <div className="mb-3">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="card-text text-muted mb-4 fst-italic">
                    "{testimonial.text}"
                  </p>
                  <div className="d-flex align-items-center">
                    <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;