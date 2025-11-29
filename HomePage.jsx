// pages/HomePage.jsx
// Landing page with hero, features, categories, and featured products

import React from 'react';
import { ChevronRight, Truck, Shield, CreditCard, Star } from 'lucide-react';

export default function HomePage({ 
  categories, 
  products, 
  navigateToPage, 
  navigateToCategory, 
  navigateToProduct,
  handleAddToCart 
}) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLThjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your <span className="text-pink-300">Style</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Explore our curated collection of premium clothing and exquisite jewelry
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigateToPage('products')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Shop Now <ChevronRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => navigateToPage('about')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                <Truck className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $100</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                <Shield className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                <CreditCard className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover our carefully curated collections</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => navigateToCategory(category)}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition">
                    <span>Explore Collection</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked favorites just for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <button 
                  onClick={() => navigateToProduct(product)}
                  className="w-full"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                </button>
                
                <div className="p-6">
                  <button 
                    onClick={() => navigateToProduct(product)}
                    className="text-left w-full"
                  >
                    <h3 className="text-xl font-semibold mb-2 hover:text-purple-600 transition">
                      {product.name}
                    </h3>
                  </button>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition font-semibold shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigateToPage('products')}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-semibold inline-flex items-center shadow-lg hover:shadow-xl"
            >
              View All Products <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Blogger",
                text: "Absolutely love the quality and style! Every piece I've purchased has exceeded my expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Verified Buyer",
                text: "Fast shipping, beautiful packaging, and stunning jewelry. Will definitely shop here again!",
                rating: 5
              },
              {
                name: "Emma Williams",
                role: "Regular Customer",
                text: "The best online shopping experience. Customer service is outstanding and products are premium.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of satisfied customers and discover your perfect style today
          </p>
          <button 
            onClick={() => navigateToPage('products')}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg shadow-lg hover:shadow-xl"
          >
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
}
