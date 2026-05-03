"use client"
import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  // console.log('User Data:', user);
  const pathname = usePathname();
  // console.log('Current Path:', pathname); 
  const router = useRouter();
  const handleLogOut = async () => {
    const { data, error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
    if (!error) {
      toast.success("You have been logged out successfully");
    }
  };

  return (

    <div className="navbar bg-base-300 mx-auto shadow-sm px-4 md:px-8 border-b border-gray-100">
      {/* Mobile Menu (Left Dropdown) */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           <li>
            <Link href="/" className={pathname === "/" ? "border-b-2 rounded-none border-green-800" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/allbooks" className={pathname === "/allbooks" ? "border-b-2 rounded-none border-green-800" : ""}>
              All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className={pathname === "/profile" ? "border-b-2 rounded-none border-green-800" : ""}>
              My Profile
            </Link>
          </li>
          </ul>
        </div>
      </div>
      {/* Logo Section */}
      <div className="navbar-start hidden lg:flex">
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
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal gap-4 font-medium">
          <li>
            <Link href="/" className={pathname === "/" ? "border-b-2 rounded-none border-green-800" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/allbooks" className={pathname === "/allbooks" ? "border-b-2 rounded-none border-green-800" : ""}>
              All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className={pathname === "/profile" ? "border-b-2 rounded-none border-green-800" : ""}>
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile & Logout Section */}
      {
        user ? <div className="navbar-end gap-4">
          {/* User Info */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-offset-2 ring-gray-100">
                <Image width={1000} height={1000} src={user.image} referrerPolicy="no-referrer" alt="User Profile" />
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-700"> {user.name}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Logout Button (DaisyUI style) */}
          <button onClick={handleLogOut} className="btn btn-sm md:btn-md bg-green-800 hover:bg-green-900 text-white border-none px-6">
            Logout
          </button>
        </div> : <div className="navbar-end">
          <Link href="/login" className="btn btn-sm md:btn-md bg-green-800 hover:bg-green-900 text-white border-none px-6">
            Login
          </Link>
          <Link href="/signup" className="btn ml-4 btn-sm md:btn-md bg-green-800 hover:bg-green-900 text-white border-none px-6">
            Sign Up
          </Link>
        </div>
      }

    </div>
  );
};

export default Navbar;