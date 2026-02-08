import { useState } from "react";
import AddBlog from "../components/AddBlog";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <AddBlog blogs={blogs} setBlogs={setBlogs} />

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;


