"use client"

import NavigationBar from '@/app/components/NavigationBar';
import { useCart } from '/src/app/context/CartContext.js';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";


const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, isInCart } = useCart();

  console.log(addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { slug } = await params;
        const data = await fetch(`http://localhost:3000/api/product/${slug}`);
        const productData = await data.json();
        setProduct(productData?.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div>
        <NavigationBar />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-semibold">Loading...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <NavigationBar />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-semibold text-red-600">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <h1 className='my-8 text-center text-2xl'>
        Product ID: <span className='text-2xl font-semibold text-[#72bf44]'>{product._id}</span>
      </h1>

      <div className="mx-auto card bg-base-100 max-w-[460px] shadow-sm">
        <figure>
          <Image 
            className='object-fill' 
            src={product?.img} 
            alt="photo" 
            height={620} 
            width={620} 
            loading="eager" 
          />
        </figure>
        <div className="card-body">
          <div className='flex justify-between items-center'>
            <h2 className="text-2xl text-center font-semibold">{product.title}</h2>
            <div className='flex gap-1 items-center'>
              <FaStar className='text-[#72bf44]' /> {product.rating}
            </div>
          </div>

          <p>{product.description}</p>

          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-center font-semibold'>TK {product.price}</h1>
            <button 
              onClick={handleAddToCart}
              className={`btn ${
                isInCart(product._id) 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'text-white bg-[#72bf44] hover:bg-[#5da336]'
              }`}
            >
              {isInCart(product._id) ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;