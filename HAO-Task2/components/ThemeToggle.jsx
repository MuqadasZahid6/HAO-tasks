import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) setTheme(storedTheme)
  }, [])

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle
