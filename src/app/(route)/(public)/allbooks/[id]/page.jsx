import Image from "next/image";
import Link from "next/link";
import React from "react";
const fetchData = async () => {
  const getPromise = await fetch(
    "https://assignment-8-ten-henna.vercel.app/book.json",
  );
  const data = await getPromise.json();
  return data;
};

const DetaisCard = async ({ params }) => {
  const books = await fetchData();
  console.log(books);
  const { id } = await params;
  
 const targetedBook = books.find((b) => b.id === Number(id));
  console.log(targetedBook);


//   console.log(targetedBook);
  return (
    <div className="bg-amber-50 p-2 md:p-50" >
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-[30px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row ">
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <Image
            src={targetedBook?.image_url}
            width={1000}
            height={1000}
            alt={targetedBook?.title}
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-5 left-5 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
            {targetedBook?.category}
          </div>
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-black text-gray-800 ">
            {targetedBook?.title}
            </h1>
          </div>

          <p className="text-gray-500  text-sm">
          {targetedBook?.description}
          </p>

          <div className="my-8 space-y-3">
            <div className="flex items-center text-gray-600">
              <span className="w-24 font-semibold text-xs uppercase text-gray-400">
                Author
              </span>
              <span className="text-sm font-medium">{targetedBook?.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-24 font-semibold text-xs uppercase text-gray-400">
               category
              </span>
              <span className="text-sm font-medium">{targetedBook?.category}</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="w-24 font-semibold text-xs uppercase  text-gray-400 ">
              quantity
              </span>
              <span className="text-sm font-bold">{targetedBook?.available_quantity}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-50">
           

            <Link href={'/allbooks'}><button className="bg-gray-900 text-white mx-auto w-100 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-gray-200 hover:cursor-pointer">
             Go Back
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaisCard;