"use client"
import React from 'react';
import { BookOpen, Home, Library, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  
  return (
    <div className="navbar bg-base-300 mx-auto shadow-sm px-4 md:px-8 border-b border-gray-100">
      {/* Logo Section */}
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <div className="text-green-800">
            <BookOpen size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-green-800 leading-tight">BookHaven</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Borrow. Read. Inspire.</p>
          </div>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          <li className="">
            <Link href="/" className="flex items-center gap-1.5 py-4 hover:text-green-800">
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link href="/allbooks" className="flex items-center gap-1.5 py-4  hover:text-green-800">
              <Library size={18} /> All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center gap-1.5 py-4  hover:text-green-800">
              <User size={18} /> My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile & Logout Section */}
      <div className="navbar-end gap-4">
        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-offset-2 ring-gray-100">
              <img src="https://via.placeholder.com/150" alt="User Profile" />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-700">Tanvir Ahmed</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Logout Button (DaisyUI style) */}
        <button className="btn btn-sm md:btn-md bg-green-800 hover:bg-green-900 text-white border-none px-6">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;