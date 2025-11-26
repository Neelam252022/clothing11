// pages/CheckoutPage.jsx
// Secure checkout with shipping and payment information

import React, { useState } from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';
import { CartManager } from '../services/CartManager';

export default function CheckoutPage({ cart, navigateToPage }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const orderTotals = CartManager.getOrderTotal(cart);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, process payment and create order
    alert('Order placed successfully! (Demo mode)');
    navigateToPage('home');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some items to your cart to checkout.</p>
        <button 
          onClick={() => navigateToPage('products')}
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-semibold"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Secure Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Shipping Address</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main Street"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="NY"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Payment Information</h3>
              <div className="flex items-center text-green-600">
                <Shield size={20} className="mr-2" />
                <span className="text-sm font-semibold">Secure Payment</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <CreditCard className="absolute right-4 top-3 text-gray-400" size={24} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">CVV</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength="4"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <Lock className="absolute right-4 top-3 text-gray-400" size={20} />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 flex items-center mt-4">
                <Shield size={16} className="mr-2 text-green-600" />
                Your payment information is encrypted and secure
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">${orderTotals.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-semibold">
                  {parseFloat(orderTotals.shipping) === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${orderTotals.shipping}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span className="font-semibold">${orderTotals.tax}</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-purple-600">
                  ${orderTotals.total}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
            >
              Place Order
            </button>

            <p className="text-xs text-gray-600 text-center mt-4">
              By placing your order, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
