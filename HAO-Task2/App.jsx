import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import BlogDetails from "./pages/BlogDetails"
import Login from "./pages/Login"
import SubmitBlog from "./pages/SubmitBlog"
import Navbar from "./components/Navbar"
import BannerImage from "./components/BannerImage"
import Footer from "./components/Footer"

function AppContent() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      
      {/*  Show only on homepage */}
      {location.pathname === "/" && <BannerImage />}

      <div className="px-6 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit" element={<SubmitBlog />} />
          <Route path="*" element={<div className="text-red-600">404 Not Found</div>} />
          
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
