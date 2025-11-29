// pages/ProductDetailPage.jsx
// Detailed product view with images, specs, and purchase options

import React, { useState } from 'react';
import { Star, Truck, Shield, Heart, Share2, Check } from 'lucide-react';

export default function ProductDetailPage({ 
  selectedProduct, 
  navigateToPage,
  handleAddToCart 
}) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!selectedProduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600 text-lg">Product not found</p>
        <button 
          onClick={() => navigateToPage('products')}
          className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green'];
  
  const handleAddToCartClick = () => {
    const productWithOptions = {
      ...selectedProduct,
      size: selectedSize,
      color: selectedColor
    };
    handleAddToCart(productWithOptions);
    alert('Product added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button onClick={() => navigateToPage('home')} className="hover:text-purple-600">
          Home
        </button>
        <span>/</span>
        <button onClick={() => navigateToPage('products')} className="hover:text-purple-600">
          Products
        </button>
        <span>/</span>
        <span className="text-gray-900">{selectedProduct.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <button 
                key={index}
                className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-purple-600 transition"
              >
                <img 
                  src={selectedProduct.image} 
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{selectedProduct.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} 
                />
              ))}
            </div>
            <span className="ml-3 text-gray-600">
              {selectedProduct.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-purple-600">
                ${selectedProduct.price}
              </span>
              {Math.random() > 0.5 && (
                <span className="text-2xl text-gray-400 line-through">
                  ${(selectedProduct.price * 1.3).toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-green-600 font-semibold mt-2">
              <Check size={18} className="inline mr-1" />
              In Stock - Ships within 2-3 business days
            </p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Size: <span className="text-purple-600">{selectedSize}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
                    selectedSize === size
                      ? 'border-purple-600 bg-purple-50 text-purple-600'
                      : 'border-gray-300 hover:border-purple-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Color: <span className="text-purple-600">{selectedColor}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
                    selectedColor === color
                      ? 'border-purple-600 bg-purple-50 text-purple-600'
                      : 'border-gray-300 hover:border-purple-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
              <span className="text-gray-600 text-sm">
                ({Math.floor(Math.random() * 50) + 20} available)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button 
              onClick={handleAddToCartClick}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => {
                handleAddToCartClick();
                navigateToPage('checkout');
              }}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Buy Now
            </button>
            <div className="flex space-x-4">
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition flex items-center justify-center">
                <Heart size={20} className="mr-2" />
                Add to Wishlist
              </button>
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition flex items-center justify-center">
                <Share2 size={20} className="mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center text-gray-700">
              <Truck className="text-purple-600 mr-3" size={24} />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Shield className="text-purple-600 mr-3" size={24} />
              <div>
                <p className="font-semibold">30-Day Returns</p>
                <p className="text-sm text-gray-600">Easy return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="border-t pt-8">
        <div className="flex space-x-8 mb-6 border-b">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-4 font-semibold transition ${
              activeTab === 'description'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`pb-4 font-semibold transition ${
              activeTab === 'specifications'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 font-semibold transition ${
              activeTab === 'reviews'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Reviews
          </button>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Experience luxury and style with this premium piece from our collection. 
                Crafted with attention to detail and high-quality materials, this item is 
                designed to elevate your wardrobe and make you feel confident.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're dressing up for a special occasion or adding a touch of 
                elegance to your everyday look, this piece offers versatility and timeless 
                appeal. The carefully selected fabric ensures both comfort and durability.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Premium quality materials</li>
                <li>Expert craftsmanship</li>
                <li>Comfortable fit</li>
                <li>Easy to care for</li>
                <li>Sustainable production</li>
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Material:</span>
                  <span className="text-gray-600">100% Premium Cotton</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Care:</span>
                  <span className="text-gray-600">Machine washable</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Origin:</span>
                  <span className="text-gray-600">Made in Italy</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Fit:</span>
                  <span className="text-gray-600">Regular fit</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Weight:</span>
                  <span className="text-gray-600">0.5 lbs</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">SKU:</span>
                  <span className="text-gray-600">LUXE-{selectedProduct.id}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="ml-3 font-semibold">Amazing Quality!</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Absolutely love this product! The quality exceeded my expectations 
                    and it fits perfectly. Highly recommend!
                  </p>
                  <p className="text-sm text-gray-600">
                    by Customer {review} • {Math.floor(Math.random() * 30) + 1} days ago
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
