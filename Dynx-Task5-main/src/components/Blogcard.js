// src/components/BlogCard.js
import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-4">
      <h3 className="text-lg font-bold text-purple-700">{blog.title}</h3>
      <p className="text-gray-600 my-2">{blog.content}</p>
      <div className="text-sm text-gray-400 font-medium">
        ✍️ {blog.author || "Anonymous"}
      </div>
    </div>
  );
};

export default BlogCard;