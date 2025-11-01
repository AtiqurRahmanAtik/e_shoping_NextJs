"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCart } from '/src/app/components/Product.jsx';


const Product = ({ item }) => {
  const { addToCart, isInCart } = useCart();
  const { _id, BrandName, Category, img, title, description, discount, rating, price } = item;

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation(); // Stop event bubbling
    addToCart(item);
  };

  return (
    <div className="card bg-base-100 w-76 max-h-96 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${_id}`}>
        <figure>
          <Image 
            className='min-w-[300px]  max-h-[186px] hover:transform hover:duration-150 hover:scale-110 hover:ease-in-out hover:delay-200' 
            src={img} 
            alt="photo" 
            height={300} 
            width={300} 
          />
        </figure>
      </Link>

      <Link href={`/product/${_id}`} className="card-body">
        <div >
          <h2 className="text-xl font-semibold text-black text-center hover:text-[#72bf44] transition-colors">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>

        <h2 className="text-xl font-semibold text-black text-center">TK. {price}</h2>
        <h2 className="text-xs font-semibold text-[#6b07c3] text-center">
          Save Tk {discount} on online order
        </h2>

        {/* Add to Cart Button */}
        {/* <button 
          onClick={handleAddToCart}
          className={`mt-2 py-2 px-4 rounded-lg font-semibold transition-colors ${
            isInCart(_id) 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-[#72bf44] text-white hover:bg-[#5da336]'
          }`}
        >
          {isInCart(_id) ? '✓ Added to Cart' : 'Add to Cart'}
        </button> */}


      </Link>
      
    </div>
  );
};

export default Product;