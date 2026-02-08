import { useState } from "react";

const AddBlog = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          required
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default AddBlog;
