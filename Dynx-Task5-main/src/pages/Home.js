import { useEffect, useState } from "react";
import AddBlog from "../components/AddBlog";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  // Load blogs on page load
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  // Add new blog
  const addBlog = (blog) => {
    const updatedBlogs = [blog, ...blogs];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div className="p-6">
      <AddBlog onAdd={addBlog} />

      <div className="mt-6 grid gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
