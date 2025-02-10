import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../data/BlogsData";
import aboutBg from "../../../img/about_bg.jpg";

const ITEMS_PER_PAGE = 6;

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsArray = Object.entries(BlogData); // Convert object to array
  const totalPages = Math.ceil(blogsArray.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = blogsArray.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8">
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#121212] bg-opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-12 mx-auto text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            ConvergeSol Overview
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-lg lg:text-xl">
            <Link to="/" className="font-medium">Home</Link> /
            <Link to="/blog"> Blog</Link>
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 py-16 text-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">
          Blog
        </h2>
        <p className="text-center text-lg sm:text-xl mb-8">
          Love From Our Clients Around The World
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentArticles.map(([key, article]) => (
            <Link
              to={`/blog/${key}`} // Pass key as a URL parameter
              key={key}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={article.imageSrc}
                  alt={article.altText}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#4A96FF] text-white text-xs sm:text-sm px-3 py-1 rounded-md">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#d0dfea] text-black rounded-md disabled:opacity-50 hover:bg-[#4A96FF]"
          >
            Previous
          </button>
          <span className="text-white font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#d0dfea] text-black rounded-md disabled:opacity-50 hover:bg-[#4A96FF]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
