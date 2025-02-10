import { Link } from "react-router-dom";
import { BlogData } from "../../data/BlogsData";

const Card = () => {
  const blogsArray = Object.entries(BlogData); // Convert object to array

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-3xl font-bold mb-4 text-white">Blog</h2>
      <p className="text-center mb-8 text-white">Stay updated with our latest blogs on industry trends and digital solutions</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogsArray.map(([key, article]) => (
          <Link
            to={`/blog/${key}`} // Pass key as a URL parameter
            key={key}
            className="bg-gray-400 rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={article.imageSrc}
                alt={article.altText}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#4A96FF] text-white text-sm px-3 py-1 rounded-md">
                {article.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
