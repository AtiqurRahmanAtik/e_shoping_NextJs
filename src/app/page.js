"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import Banner from "./components/Banner";
import Product from "./components/Product";
import BannerRight from "./components/BannerRight";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch products and branches on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch products
        const productsRes = await fetch('/api/product');
        const productsData = await productsRes?.json();
        const productsArray = productsData?.Products || [];
        
        setAllProducts(productsArray);
        setFilteredProducts(productsArray);

        // Fetch branches
        const branchRes = await fetch("/api/branch");
        const branchData = await branchRes.json();
        setBranches(branchData?.BranchName || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products whenever search term or category changes
  useEffect(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => 
        product.Category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.BrandName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, allProducts]);

  // Handle search change from NavigationBar
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Handle category change from NavigationBar
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <NavigationBar className="min-w-svw"
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />

      <main className="">
        {/* Filter Status */}
        {(searchTerm || selectedCategory !== "All") && (
          <div className="bg-gray-100 p-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <p className="text-lg font-semibold">
                Showing {filteredProducts.length} products
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
              <button 
                onClick={resetFilters}
                className="text-[#72bf44] hover:underline font-semibold"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}

        {/* Rest of your home page content remains the same */}
        <div className="flex gap-0.5">
          <Banner/>
          <BannerRight/>
        </div>

        {/* Service section */}
        <div className="my-2 bg-[#f2f2f2] items-center py-4 flex gap-1 justify-center">
          <FaMoneyCheckDollar className="text-xl text-[#72bf44]" />
          <h1 className="text-[#b38b2a] text-xl font-semibold"> 0% EMI <span className="text-black mx-1">|</span> </h1>

          <FcBusinessman className="text-xl text-[#72bf44]" />
          <h1 className="text-[#b38b2a] text-xl font-semibold"> 24/7 Online Support <span className="text-black mx-1">|</span> </h1>

          <FaCreditCard className="text-xl text-[#72bf44]" />
          <h1 className="text-[#b38b2a] text-xl font-semibold"> No charge on card payment <span className="text-black mx-1">|</span> </h1>

          <FaTruck className="text-xl text-[#72bf44]" />
          <h1 className="text-[#b38b2a] text-xl font-semibold"> Cash on delivery in 64 districts </h1>
        </div>

        {/* Top Category */}
        <div className="border-b-2 border-black my-4">
          <h1 className='text-2xl px-2 text-white max-w-50 bg-[url("/Images/blackWidth.png")] font-bold border-b-2 border-black'>
            Top Categories
          </h1>
        </div>

        {/* Category Icons */}
        <div className="flex gap-22 my-8 justify-center">
          <div className="text-center cursor-pointer" onClick={() => handleCategoryChange("Mobile")}>
            <Image src="/Images/user-interface.png" alt="Mobile" width={80} height={60} />
            <h1 className="text-xl text-black font-semibold mt-1">Mobile</h1>
          </div>

          <div className="text-center cursor-pointer" onClick={() => handleCategoryChange("Tablet")}>
            <Image src="/Images/tablet.png" alt="Tablet" width={80} height={60} />
            <h1 className="text-xl text-black font-semibold mt-1">Tablet</h1>
          </div>

          <div className="text-center cursor-pointer" onClick={() => handleCategoryChange("Desktop")}>
            <Image src="/Images/desktop5.png" alt="Desktop" width={80} height={60} />
            <h1 className="text-xl text-black font-semibold mt-1">Desktop</h1>
          </div>
        </div>

        {/* Collection */}
        <div className="border-b-2 border-black my-6">
          <h1 className='text-2xl px-2 text-white max-w-50 bg-[url("/Images/blackWidth.png")] font-bold border-b-2 border-black'>
            Collections
          </h1>
        </div>

        {/* Show filtered products here */}
        <div className="my-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <Product key={item._id} item={item} />)
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-xl font-semibold text-gray-600">No products found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              <button 
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-[#72bf44] text-white rounded-lg hover:bg-[#5da336] transition-colors"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>

        {/* Top BrandName */}
        <div className="border-b-2 border-black my-6">
          <h1 className='text-2xl px-2 text-white max-w-50 bg-[url("/Images/blackWidth.png")] font-bold border-b-2 border-black'>
            Top Brands
          </h1>
        </div>

        <div className="flex gap-0 my-8 overflow-x-auto">
          {allProducts?.slice(0, 12).map((item) => (
            <div 
              className="border border-[#f2f2f2] text-lg py-2 px-4 font-semibold text-black whitespace-nowrap flex-shrink-0"
              key={item._id}
            >
              {item?.BrandName}
            </div>
          ))}
        </div>

        {/* Branch Name */}
        <h1 className="mt-6 text-xl font-semibold text-black mb-4">
          The Leading Retail and Online Shop for Computers, Laptops, Monitors & Accessories in Bangladesh
        </h1>

        <p className="my-2">
          If you are looking for the best computer shop in Bangladesh, you have to consider Ryans Computers, as it is a pioneer computer shop and e-commerce platform selling computers and IT products all over branches and website. We provide a fast, secure, and convenient online shopping experience with a wide range of products, including <span className="text-[#338dd0] text-lg font-semibold">laptops, desktop PCs,</span> and essential desktop components such as <span className="text-[#338dd0] text-lg font-semibold"> processors, RAM, graphics cards, motherboards, and power supplies</span>. Our collection also covers <span className="text-[#338dd0] text-lg font-semibold">(Printer, Photocopier, Scanner, Projector), cameras, camera accessories, smart gadgets, home appliances, networking items, and premium sound systems—ensuring</span> office equipment everything you need is just a click away. Now also providing <span className="text-[#338dd0] text-lg font-semibold">Starlink internet kits</span> for high-speed satellite connectivity. Ryans is always endeavoring to offer its customers the best possible facility – including multiple payment options, EMI Facility, best price, cash on delivery, delivery in 64 districts, free home delivery inside Dhaka, Chattog <button className="text-[#72bf44] text-lg font-semibold"> ReadMore</button>
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {branches?.map((item) => (
            <div className="border p-4" key={item._id}>
              <h1 className="text-lg font-bold text-black">{item.branchName}</h1>
              <h3>{item.address}</h3>
              <p> Tel : {item.phoneSales} {item.phoneService}</p>
              <Link href={item.mapLink} className="text-[#338dd0] text-lg font-semibold underline">
                See Map
              </Link>
              <br />
              <Link href={item.detailsLink} className="text-[#338dd0] text-lg font-semibold underline">
                Go For Branch Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};