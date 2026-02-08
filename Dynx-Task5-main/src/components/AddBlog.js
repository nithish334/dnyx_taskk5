// src/components/AddBlog.js
import { useState } from "react";

export default function AddBlog({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    onAdd(newBlog);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border"
      />

      <textarea
        placeholder="Blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-2 p-2 border"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Publish
      </button>
    </form>
  );
}
