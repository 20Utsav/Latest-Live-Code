import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../data/BlogsData";

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
          backgroundImage: "url('/img/about_bg.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white px-6 md:px-12">
          <h1 className="text-4xl font-bold">ConvergeSol Overview</h1>
          <p className="mt-2 text-lg">
            <span className="font-medium">Home</span> / Blog
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 py-16">
                <h2 className="text-center text-3xl font-bold   mb-4">
          Blog
        </h2>
        <p className="text-center mb-8">
          Love From Our Client Around The World
        </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-600 text-white text-sm px-3 py-1 rounded-md">
                {article.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
