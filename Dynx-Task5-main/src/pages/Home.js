import { useState } from "react";
import AddBlog from "../components/AddBlog";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="p-6">
      <AddBlog setBlogs={setBlogs} />

      <div className="mt-4 space-y-4">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

