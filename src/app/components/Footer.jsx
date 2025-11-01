import { Geist } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';


const geist = Geist({
  subsets: ['latin', ],
    weight: '600',
    
})


const Footer = () => {

    return (

        <footer className="footer sm:footer-horizontal bg-[#000000] text-white p-10">
  <aside>
   
     <div className='py-2 mx-auto flex gap-4 justify-around'>
            <div href={"/"} className={`${geist.className} text-4xl font-semibold text-[#72bf44]`}>EBazeer </div>
            
            </div>


            {/* logo */}
             <div className=" grid grid-flow-col gap-4 lg:ml-3">
    

     <FaFacebookSquare className='text-2xl '></FaFacebookSquare>


    <IoLogoYoutube className='text-2xl '></IoLogoYoutube>

      <IoLogoTwitter  className='text-2xl '></IoLogoTwitter>

      <FaInstagramSquare className='text-2xl ' ></FaInstagramSquare>

      <FaLinkedin className='text-2xl ' ></FaLinkedin>
    </div>

        <div className='mx-auto'>
          <button className=' p-1 hover:underline text-lg rounded-md mx-auto bg-[#dc3545] text-white border-none font-semibold'> Complaint Box</button>
        </div>

        <div className='mx-auto mt-2'>
          <button className=' rounded-md border border-[#0dcaf0] p-1 font-semibold  text-[#0dcaf0]'>Didn't find your product ?</button>
        </div>

  </aside>


  <nav>
    <h6 className="">About Us</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='border-l px-2'>
    <h6 className="">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>

  <nav className='border-l px-2'>
    <h6 className="">Contact Us</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>

        <div className='flex gap-1  items-center'>
          
<FaLocationDot className='text-red-500'></FaLocationDot>
     <Link href={"https://www.google.com/maps/dir/House+No+-+18,+iCenter+Dhanmondi,+Mirpur+Road,+Dacca/19%2FA,+5th+Floor,+Theme+Omor+Plaza,+Rajshahi+6000/@24.0713201,88.1936425,307848m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3755b8b6d194eb43:0x2d4ad9dbe3b40e0c!2m2!1d90.382197!2d23.7448761!1m5!1m1!1s0x39fbefed728f35ab:0x2c40f67288c09c5a!2m2!1d88.6019008!2d24.3733139?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"}  className="text-[#338dd0]  font-semibold "> See in Map</Link>
        </div>

  </nav>



  
</footer>
    );
};

export default Footer;