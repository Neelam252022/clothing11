// pages/ProductsPage.jsx
// Product listing page with filters, sorting, and category navigation

import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function ProductsPage({ 
  categories, 
  products, 
  selectedCategory,
  setSelectedCategory,
  loadProducts,
  navigateToProduct,
  handleAddToCart 
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    loadProducts(category.slug);
  };
  
  const handleAllProducts = () => {
    setSelectedCategory(null);
    loadProducts();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {selectedCategory ? selectedCategory.name : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
        
        {/* Sort Dropdown */}
        <div className="w-full md:w-auto">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Categories Filter */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Categories</h3>
            
            <div className="space-y-2">
              <button 
                onClick={handleAllProducts}
                className={`block w-full text-left py-2 px-3 rounded-lg transition ${
                  !selectedCategory 
                    ? 'bg-purple-50 text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Products
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`block w-full text-left py-2 px-3 rounded-lg transition ${
                    selectedCategory?.id === category.id 
                      ? 'bg-purple-50 text-purple-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Price Filter (Static for now) */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">Under $50</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">$50 - $100</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">$100 - $200</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">Over $200</span>
                </label>
              </div>
            </div>
            
            {/* Rating Filter */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-700 ml-2">& Up</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
              <button 
                onClick={handleAllProducts}
                className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
              >
                View all products
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Product Image */}
                  <button 
                    onClick={() => navigateToProduct(product)} 
                    className="w-full aspect-square overflow-hidden relative group"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </button>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <button 
                      onClick={() => navigateToProduct(product)}
                      className="text-left w-full mb-2"
                    >
                      <h3 className="text-lg font-semibold hover:text-purple-600 transition line-clamp-2">
                        {product.name}
                      </h3>
                    </button>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
                    </div>
                    
                    {/* Price and Add to Cart */}
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">
                        ${product.price}
                      </span>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-full transition font-semibold ${
                          product.inStock
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination (Static for now) */}
          {sortedProducts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Previous
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
