// src/components/AddBlog.js
import React, { useState } from 'react';

const AddBlog = ({ onPublish }) => { // Make sure this prop name matches what Home.js uses
  const [formData, setFormData] = useState({ author: '', title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    onPublish(formData); // This sends the object up to Home.js
    setFormData({ author: '', title: '', content: '' }); // Clears the form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-purple-600 mb-4">Add New Blog</h2>
      <div className="flex flex-col gap-3">
        <input 
          className="border p-2 rounded" 
          placeholder="Author" 
          value={formData.author}
          onChange={(e) => setFormData({...formData, author: e.target.value})}
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Title" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <textarea 
          className="border p-2 rounded" 
          placeholder="Content" 
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
        />
        <button type="submit" className="bg-purple-600 text-white p-2 rounded font-bold">
          Publish
        </button>
      </div>
    </form>
  );
};

export default AddBlog;