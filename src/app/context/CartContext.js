"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map(item =>
          item._id === product._id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart
  const getCartTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getCartTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Check if item is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item._id === productId);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotalItems,
    getCartTotalPrice,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}