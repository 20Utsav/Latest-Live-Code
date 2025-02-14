import React from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../data/BlogsData";
import { FaArrowRight } from "react-icons/fa";

const HomeBlog = () => {
  const blogsArray = Object.entries(BlogData); // Convert object to array

  // Only take the first 3 blogs
  const currentArticles = blogsArray.slice(0, 3);

  return (
    <div className="py-16 bg-[#121212]">
      {/* Blog Section */}
      <div className="px-4 md:px-8 lg:px-16 text-white">
        <h2 className="text-center text-3xl font-bold mb-4">Blog</h2>
        <p className="text-center mb-8">Stay updated with our latest blogs on industry trends and digital solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentArticles.map(([key, article]) => (
            <Link
              to={`/blog/${key}`} // Pass key as a URL parameter
              key={key}
              className="p-3 bg-[#202020] rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105 "
            >
              <div className="relative">
                <img
                  src={article.imageSrc}
                  alt={article.altText}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#4A96FF] text-[#D0DFEA] text-sm px-3 py-1 rounded-md">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
         {/* Show More Button */}
                <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center px-6 py-3 bg-[#D0DFEA] text-black font-semibold rounded-lg hover:bg-[#4A96FF]  transition-colors">
            Show More 
            <FaArrowRight className="ml-2 h-5 w-5" /> {/* You can adjust the size of the icon if necessary */}
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HomeBlog;
