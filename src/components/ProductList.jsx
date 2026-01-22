import React, { useContext } from 'react';
import { CartContext } from '../App';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, rating: 4.5, icon: '🎧' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.8, icon: '⌚' },
    { id: 3, name: 'USB-C Cable', price: 12.99, rating: 4.2, icon: '🔌' },
    { id: 4, name: 'Phone Case', price: 24.99, rating: 4.6, icon: '📱' },
    { id: 5, name: 'Screen Protector', price: 9.99, rating: 4.3, icon: '🛡️' },
    { id: 6, name: 'Portable Charger', price: 34.99, rating: 4.7, icon: '🔋' },
  ];

  return (
    <section className="my-5">
      <h2 className="mb-4 text-center fw-bold">Featured Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm hover-lift" style={{ transition: 'transform 0.3s' }}>
              <div className="card-header bg-light text-center py-4" style={{ fontSize: '3rem' }}>
                {product.icon}
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">⭐ {product.rating}</span>
                </div>
                <p className="card-text text-muted mb-3">High-quality product with great value</p>
                <h6 className="text-primary fw-bold mb-3">Price: ${product.price.toFixed(2)}</h6>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary mt-auto"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;