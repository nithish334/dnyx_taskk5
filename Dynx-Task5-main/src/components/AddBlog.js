import { useState } from "react";

export default function AddBlog({ setBlogs }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    setBlogs(prev => [newBlog, ...prev]);

    setTitle("");
    setContent("");
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Blog Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Blog Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </div>
  );
}
