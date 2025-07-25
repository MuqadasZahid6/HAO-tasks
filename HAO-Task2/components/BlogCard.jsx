import { Link } from "react-router-dom"

const BlogCard = ({ blog }) => (
  <div className="w-full max-w-4xl mx-auto">
    <Link
      to={`/blog/${blog.id}`}
      className="flex flex-col md:flex-row gap-4 items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
    >
      {/* Left: Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:w-64 h-40 object-cover rounded-md"
      />

      {/* Right: Content */}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {blog.summary}
        </p>
        {/*  Date below summary */}
        <p className="text-xs text-red-500 dark:text-gray-400 mt-1">
          Published on: {blog.date}
        </p>
      </div>
    </Link>
  </div>
)

export default BlogCard
