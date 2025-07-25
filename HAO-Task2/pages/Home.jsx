import { useEffect, useState } from "react"
import { blogs as mockBlogs } from "../data/blogs"
import BlogCard from "../components/BlogCard"

const Home = () => {
  const [allBlogs, setAllBlogs] = useState(mockBlogs)

  useEffect(() => {
    const temp = sessionStorage.getItem("tempBlog")
    if (temp) {
      const newBlog = JSON.parse(temp)
      setAllBlogs([newBlog, ...mockBlogs]) // show it once
      sessionStorage.removeItem("tempBlog") // disappear on refresh
    }
  }, [])

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Blogs
      </h1>

      <div id="blogs" className="flex flex-col items-center gap-6">
        {allBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Home
