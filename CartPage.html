// pages/CartPage.jsx
// Shopping cart with item management and order summary

import React from 'react';
import { ShoppingCart, X, Trash2, ArrowLeft } from 'lucide-react';
import { CartManager } from '../services/CartManager';

export default function CartPage({ 
  cart, 
  navigateToPage,
  handleRemoveFromCart,
  handleUpdateQuantity 
}) {
  const orderTotals = CartManager.getOrderTotal(cart);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cart.length === 0 
              ? 'Your cart is empty' 
              : `${CartManager.getItemCount(cart)} ${CartManager.getItemCount(cart) === 1 ? 'item' : 'items'} in your cart`
            }
          </p>
        </div>
        <button 
          onClick={() => navigateToPage('products')}
          className="flex items-center text-purple-600 hover:text-purple-700 font-semibold"
        >
          <ArrowLeft size={20} className="mr-2" />
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart State */
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <div className="mb-6">
            <ShoppingCart size={80} className="mx-auto text-gray-300" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button 
            onClick={() => navigateToPage('products')}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-semibold shadow-lg inline-flex items-center"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        /* Cart with Items */
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-6 hover:shadow-lg transition"
              >
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <button 
                    onClick={() => navigateToPage('product-detail')}
                    className="text-left"
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-purple-600 transition truncate">
                      {item.name}
                    </h3>
                  </button>
                  
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    {item.size && <p>Size: <span className="font-medium">{item.size}</span></p>}
                    {item.color && <p>Color: <span className="font-medium">{item.color}</span></p>}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Price */}
                    <div>
                      <p className="text-2xl font-bold text-purple-600">
                        ${item.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-gray-100 transition text-lg font-semibold"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-gray-100 transition text-lg font-semibold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
              
              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({CartManager.getItemCount(cart)} items)</span>
                  <span className="font-semibold">${orderTotals.subtotal}</span>
                </div>
                
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {parseFloat(orderTotals.shipping) === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${orderTotals.shipping}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">${orderTotals.tax}</span>
                </div>

                {/* Promo Code */}
                <div className="pt-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-3xl font-bold text-purple-600">
                    ${orderTotals.total}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={() => navigateToPage('checkout')}
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl mb-4"
              >
                Proceed to Checkout
              </button>

              {/* Additional Info */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
