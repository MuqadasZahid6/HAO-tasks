// File: src/pages/Login.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    navigate("/submit")
  }

  return (
    <div className="p-6 max-w-md mx-auto space-y-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
  className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
  onClick={handleLogin}
>
  Login
</button>

    </div>
  )
}

export default Login
