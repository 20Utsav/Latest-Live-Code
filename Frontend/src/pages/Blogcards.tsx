import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogData,BlogPost } from "../data/BlogsData";

const BlogPage = () => {
  const { blogId } = useParams<{ blogId: string }>(); // Ensure blogId is always a string
  const blog: BlogPost | undefined = blogId ? BlogData[blogId] : undefined; 
  if (!blog) {
    return <div className="text-center text-white text-xl">Blog not found!</div>;
  }
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="py-12 ">
      <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="">{blog.category}</p>
      <img
        src={blog.imageSrc}
        alt={blog.altText}
        className="w-full h-64 object-cover rounded-md mt-4"
      />
      <div className="mt-6">
        <p className="whitespace-pre-line">{blog.blog.description}</p>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
