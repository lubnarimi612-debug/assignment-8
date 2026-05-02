import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
const fetchData = async () => {
  const getPromise = await fetch(
    "https://assignment-8-ten-henna.vercel.app/book.json",
  );
  const data = await getPromise.json();
  return data;
};

const page = async ({ searchParams }) => {
  const books = await fetchData();
  const query = (await searchParams).query || "";

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="container mx-auto my-5 ">
        <div className=" py-16 border-b border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Explore Our Full Collection
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
             Discover the perfect books for your taste, from timeless classics to modern bestsellers. Use the search below to find exactly what you’re looking for.
            </p>

            <div className="max-w-xl mx-auto relative group">
              <form className="max-w-xl mx-auto">
                <input
                  name="query"
                  type="text"
                  defaultValue={query}
                  placeholder="Search books by title..."
                  className="w-full px-8 py-5 rounded-2xl bg-white shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-14"
                />
                <IoSearchSharp className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <button
                  type="submit"
                  className="absolute right-5 top-1/2 -translate-y-1/2  btn "
                >
                  {" "}
                  Search{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4   ">
          {filteredBooks.map((book, index) => (
            <div key={index}>
              <div className="max-w-sm bg-white rounded-xl container mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={book?.image_url}
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
                    <button className="w-full bg-gray-900 hover:bg-amber-950 text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 hover:cursor-pointer">
                      View Details
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {filteredBooks.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 px-6 text-center ">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Books Available
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-8">
            We couldn't find any books for 
                <span className="font-semibold text-blue-600">"{query}"</span>.
             Try searching with a different title, author, or genre, or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;