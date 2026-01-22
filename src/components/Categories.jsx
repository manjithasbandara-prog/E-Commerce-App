import React, { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Electronics', icon: '💻', count: 245 },
    { id: 2, name: 'Clothing', icon: '👕', count: 380 },
    { id: 3, name: 'Home & Garden', icon: '🏠', count: 152 },
    { id: 4, name: 'Sports', icon: '⚽', count: 98 },
    { id: 5, name: 'Books', icon: '📚', count: 567 },
  ];

  return (
    <section className="my-5">
      <h2 className="mb-4 text-center fw-bold">Shop by Category</h2>
      <div className="row g-3">
        {categories.map((category) => (
          <div key={category.id} className="col-md-6 col-lg-4">
            <button
              onClick={() => setSelectedCategory(category.id)}
              className={`w-100 p-4 border-0 rounded text-center transition ${
                selectedCategory === category.id
                  ? 'btn-primary text-white'
                  : 'btn-light text-dark border border-2'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? '#667eea' : '#f8f9fa',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '2.5rem' }}>{category.icon}</div>
              <h5 className="mb-1">{category.name}</h5>
              <small>{category.count} items</small>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;