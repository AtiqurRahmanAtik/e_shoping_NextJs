"use client"

import React, { useState } from 'react';
import { FaCartShopping, FaHeart, FaRepeat } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle, MdMailOutline } from "react-icons/md";
import { FaHome, FaStore } from "react-icons/fa";
import { Geist } from 'next/font/google';
import { FcSupport } from "react-icons/fc";
import { FaGift } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from 'next/link';
import { useCart } from '../../app/context/CartContext.js';


const geist = Geist({
  subsets: ['latin'],
  weight: '600',
})

const NavigationBar = ({ onSearchChange, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const { getCartTotalItems } = useCart();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const categories = ["All", "Mobile", "Tablet", "Desktop"];

  const topBarItems = [
    { icon: IoCallSharp, text: "16216" },
    { icon: MdMailOutline, text: "info@eshoping.com" },
    { icon: FcSupport, text: "Customer Services" },
    { icon: FaGift, text: "Offer" },
    { icon: MdNewspaper, text: "New Arrival" },
    { icon: FaStore, text: "Store" }
  ];

  return (
    <nav className='bg-black'>
      {/* Top Info Bar */}
      <div className='pt-1'>
        <ul className='flex gap-4 justify-center text-white'>
          {topBarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className='hover:text-[#72bf44] transition-colors'>
                <div className='flex hover:text-[#72bf44] gap-1 items-center'>
                  <IconComponent className='border hover:text-[#72bf44] text-xl p-0.5 text-white rounded-full' />
                  <h2>{item.text}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Middle Section */}
      <div className='py-3 flex gap-4 justify-around items-center'>
        <Link href={"/"} className={`${geist.className} text-4xl font-semibold text-[#72bf44] hover:scale-105 transition-transform`}>
          EBazeer 
        </Link>

        <div className='relative flex gap-4 items-center'>
          {/* Search Form */}
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              className='bg-white border-none rounded-xl px-4 py-2 w-[460px] focus:outline-none focus:ring-2 focus:ring-[#72bf44]'
              type="text" 
              name="search" 
              placeholder='Search Your Item...'
              value={localSearchTerm}
              onChange={handleSearchChange}
            />
            <button 
              type="submit"
              className="absolute top-0 right-0 bg-[#72bf44] text-white p-2 rounded-r-xl hover:bg-[#5da336] transition-colors"
            >
              <FaSearch className='text-2xl font-semibold' />
            </button>
          </form>

          {/* System Builder Dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={toggleDropdown}
                className="inline-flex gap-2 justify-center rounded-md border-2 border-[#72bf44] hover:text-white px-3 py-2 text-lg font-semibold text-[#ffd400] hover:bg-[#72bf44] focus:outline-none items-center transition-colors"
              >
                SYSTEM BUILDER
                <TiArrowSortedDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    PC Builder 
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    CC Builder 
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='flex gap-4'>
          {/* Cart Icon with Badge */}
          <Link href="/cart" className="relative">
            <FaCartShopping className='text-2xl text-white cursor-pointer hover:text-[#72bf44] transition-colors' />
            {getCartTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getCartTotalItems()}
              </span>
            )}
          </Link>

          <FaHeart className='text-2xl text-white cursor-pointer hover:text-[#72bf44] transition-colors' />
          <FaRepeat className='text-2xl text-white cursor-pointer hover:text-[#72bf44] transition-colors' />
          <MdAccountCircle className='text-2xl text-white cursor-pointer hover:text-[#72bf44] transition-colors' />
        </div>
      </div>

      {/* Categories */}
      <div className='flex gap-6 items-center py-3 px-8'>
        <FaHome className='text-xl text-white' />
        <ul className='flex gap-6'>
          {categories.map((category) => (
            <li 
              key={category}
              className='text-xl font-semibold cursor-pointer text-white hover:text-[#72bf44] transition-colors'
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;