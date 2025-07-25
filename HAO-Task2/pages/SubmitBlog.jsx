import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SubmitBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState("")

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = () => {
    if (!title || !content || !preview) {
      alert("Please fill all fields and upload an image.")
      return
    }

    const newBlog = {
      id: Date.now(),
      title,
      summary: content.slice(0, 100) + "...",
      content,
      image: preview,
    }

    // Save temporarily
    sessionStorage.setItem("tempBlog", JSON.stringify(newBlog))

    // Navigate to Home to show the blog
    navigate("/")
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-800 rounded shadow-md">
      <h1 className="text-3xl font-bold text-center">📝 Submit a New Blog</h1>
      <input
        className="w-full p-3 border rounded"
        placeholder="Blog Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 border rounded"
        rows={6}
        placeholder="Blog Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" onChange={handleImageChange} />
      {preview && <img src={preview} className="w-64 mt-4 rounded" />}
      <button
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 w-full"
        onClick={handleSubmit}
      >
        Publish Blog
      </button>
    </div>
  )
}

export default SubmitBlog
