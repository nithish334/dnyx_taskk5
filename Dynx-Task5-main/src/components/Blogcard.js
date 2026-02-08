export default function BlogCard({ blog }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="mt-2">{blog.content}</p>
    </div>
  );
}
