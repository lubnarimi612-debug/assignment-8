import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a221a] text-gray-300 py-10 px-6 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        

        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📖</span>
            <h2 className="text-white text-xl font-bold">BookHaven</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Your digital library companion.<br />
            Borrow. Read. Inspire.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors">
               <span className="w-5 h-5 block text-center leading-tight">f</span>
            </a>
            <a href="#" className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors">
               <span className="w-5 h-5 block text-center leading-tight">t</span>
            </a>
            <a href="#" className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors">
               <span className="w-5 h-5 block text-center leading-tight">ig</span>
            </a>
            <a href="#" className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors">
               <span className="w-5 h-5 block text-center leading-tight">in</span>
            </a>
          </div>
        </div>
<div className='flex gap-20'>
  
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">All Books</a></li>
            <li><a href="#" className="hover:text-white">My Profile</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Story</a></li>
            <li><a href="#" className="hover:text-white">Tech</a></li>
            <li><a href="#" className="hover:text-white">Science</a></li>
          </ul>
        </div>
</div>


        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: rimi@gmail.com</li>
            <li>Phone: +880 123 456 7890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>


        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Get updates on new books and special offers.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered bg-transparent border-gray-600 focus:border-green-600 w-full max-w-xs text-sm" 
            />
            <button className="btn bg-green-700 hover:bg-green-800 border-none text-white px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2026 BookHaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;