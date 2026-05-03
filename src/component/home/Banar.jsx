import React from "react";
import banarImg from "@/asset/image/banar.jpeg";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";
// import { FiSearch } from "react-icons/fi";

const Banar = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
      <Image
        src={banarImg}
        alt=" Tiles Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex items-center ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-2 text-green-500 border rounded-md border-green-800 w-max px-3 py-1 mb-4">
                <BookOpen size={20}  />
                <p>WELCOME TO BOOKHAVEN</p>
            </div>
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight">
             Find Your <br />
              <span className="text-green-500">Next Read  </span>
            </h1>

            <p className="text-gray-200 mt-6 text-lg md:text-xl font-light max-w-lg leading-relaxed">
             Explore Thousands of books across categories. <br />
              <span className="text-green-500">Borrow , read and discover your next favorite book </span>
            </p>

               <button>

            <Link href="/allbooks" className="mt-8 bg-green-800 hover:bg-green-950 text-white px-8 py-3 rounded-md flex items-center gap-2 text-lg transition-all duration-300 shadow-lg">
              {/* <FiSearch size={20} /> */}
              Browse Now
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
