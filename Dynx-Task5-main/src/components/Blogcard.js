export default function BlogCard({ blog }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}
