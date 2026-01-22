import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import Features from '../components/Features'; // Ensure you created this
import Testimonials from '../components/Testimonials'; // Ensure you created this

const HomePage = () => {
  return (
    <div className="container">
      <HeroSection />
      <Categories />
      <ProductList />
      <Features />
      <Testimonials />
    </div>
  );
};
export default HomePage;