import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

export default function Login() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    
    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const response = await axios.post(
          `${BASE_URL}/user/social-login`,
        {
          name: user.displayName,
          email: user.email,
          provider: "google",
          providerId: user.uid,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setSuccess("Google login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 6500);
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Google login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] p-4">
      <div className="bg-[#1f2937]/80 dark:bg-[#111827]/90 backdrop-blur-sm w-full max-w-[420px] rounded-2xl shadow-2xl p-6 border border-gray-700/50">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 mb-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="/ThumbnailGen_Logo.png"
              alt="Logo"
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text ">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-1 text-center">
            Login to your ThumbnailGen account
          </p>
        </div>

        {success && (
          <div className="mb-4 p-2.5 bg-green-900/30 text-green-400 text-center rounded-lg text-sm">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2.5 bg-red-900/30 text-red-400 text-center rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="text-gray-300 text-sm mb-1.5 block font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700/50 placeholder-gray-400 transition-all text-sm"
              required
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1.5 block font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700/50 placeholder-gray-400 transition-all text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 accent-yellow-400 rounded"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-yellow-400 hover:underline text-sm font-medium"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-all mt-1 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-600/50"></div>
          <p className="text-gray-400 text-sm">Or continue with</p>
          <div className="flex-1 h-px bg-gray-600/50"></div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex items-center justify-center gap-2 flex-1 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium hover:shadow-lg transition-all border border-gray-600/50 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <FcGoogle size={19} /> Google
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
