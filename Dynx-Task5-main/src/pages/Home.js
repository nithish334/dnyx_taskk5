import React, { useState } from 'react';
// 1. REMOVE the Navbar import below
// import Navbar from '../components/Navbar'; 
import AddBlog from '../components/AddBlog';
import BlogCard from '../components/Blogcard';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog", author: "Pavan", content: "This is a sample blog post." }
  ]);

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 2. REMOVE the <Navbar /> tag from here */}
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <AddBlog onPublish={handleAddBlog} />

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-700">Recent Posts</h2>
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;