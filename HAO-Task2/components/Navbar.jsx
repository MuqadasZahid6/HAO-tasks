import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("auth") === "true")
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("auth")
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <img
          src={isDark ? "/assets/logo-white.jpg" : "/assets/logo-black.jpg"}
          alt="Logo"
          className="h-8 w-8 object-contain"
        />
        Fitness Mode
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <button
  onClick={() => {
    if (window.location.pathname === "/") {
      // Already on home page → just scroll
      const el = document.getElementById("blogs")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      // Go to home page first, then scroll after mount
      localStorage.setItem("scrollToBlogs", "true")
      navigate("/")
    }
  }}
  className="hover:underline"
>
  Blogs
</button>

        {isLoggedIn && <Link to="/submit" className="hover:underline">Submit</Link>}
        {!isLoggedIn ? (
          <Link to="/login" className="bg-black hover:bg-gray-800 text-white px-3 py-1 rounded">Login</Link>
        ) : (
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Logout</button>
        )}
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
