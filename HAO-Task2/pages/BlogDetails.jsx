// File: src/pages/BlogDetails.jsx
import { useParams } from "react-router-dom"
import { blogs } from "../data/blogs"

const BlogDetails = () => {
  const { id } = useParams()
  const blog = blogs.find(b => b.id.toString() === id)

  if (!blog) return <div className="p-6 text-red-600">Blog not found</div>

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-4xl font-bold mt-4 text-gray-800 dark:text-white">{blog.title}</h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{blog.content}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
  Published on: {blog.date}
</p>

    </div>
  )
}

export default BlogDetails