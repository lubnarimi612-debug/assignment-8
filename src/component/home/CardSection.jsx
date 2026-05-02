import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const fetchData = async () => {
  const getPromise = await fetch(
    "https://assignment-8-ten-henna.vercel.app/book.json",
  );
  const data = await getPromise.json();
  return data;
};

const CardSection = async () => {
  const books = await fetchData();
  const limitedBooks = books.slice(2, 6);


  return (
    <div className="bg-[#f6f0eb] py-10 pt-10">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center mb-5">
          <h2 className="text-5xl font-bold font-serif">Featured books </h2>
          <p className=" text-[20px]  font-serif">Handpicked books for you </p>
          <div className="border my-2 border-[#93490c] px-10"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4   ">
          {limitedBooks.map((book) => (
            <div key={book.id}>
              <div className="max-w-sm w-100 bg-white rounded-xl container mx-auto  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={book.image_url}
                    alt="Ceramic Blue Glaze"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                    In Stock
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold  text-gray-900 tracking-tight">
                      {book.title}
                    </h2>
                    <span className="text-lg font-extrabold text-blue-600">
                      ${book.price}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {book.description}
                  </p>

                  <Link href={`/books/${book.id}`}>
                    <button className="w-full bg-gray-900 hover:cursor-pointer hover:bg-amber-950 text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                      View Details
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;