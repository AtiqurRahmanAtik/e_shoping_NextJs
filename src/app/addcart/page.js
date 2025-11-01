"use client"

import React from 'react';
import NavigationBar from '@/app/components/NavigationBar';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotalPrice 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <NavigationBar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some products to your cart!</p>
            <Link 
              href="/" 
              className="bg-[#72bf44] text-white px-6 py-3 rounded-lg hover:bg-[#5da336] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b py-6">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={100} 
                  height={100} 
                  className="rounded-lg"
                />
                
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">TK {item.price}</p>
                  
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                    
                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    TK {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            
            <button 
              onClick={clearCart}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Clear Entire Cart
            </button>
          </div>
          
          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>TK {getCartTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>TK 50.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>TK {(getCartTotalPrice() + 50).toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-[#72bf44] text-white py-3 rounded-lg hover:bg-[#5da336] transition-colors">
              Proceed to Checkout
            </button>
            
            <Link 
              href="/" 
              className="block text-center mt-4 text-[#72bf44] hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;