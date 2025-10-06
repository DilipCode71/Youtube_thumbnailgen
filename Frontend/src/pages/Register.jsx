import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  
  const [showPassword, setShowPassword] = useState(false);
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  };
  const [formData, setFormData] = useState(initialFormState);
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (!formData.agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      setLoading(false);
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
          `${BASE_URL}/user/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess("Registration successful! Redirecting to login...");
      setFormData(initialFormState);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] p-4">
      <div className="bg-[#1f2937]/80 dark:bg-[#111827]/90 backdrop-blur-sm w-full max-w-[450px] rounded-2xl shadow-2xl p-6 border border-gray-700/50">
        <div className="flex flex-col items-center mb-5">
          <img
            src="/ThumbnailGen_Logo.png"
            alt="Logo"
            className="w-14 h-14 mb-2 transition-transform hover:scale-105"
          />
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text ">
            Create your account
          </h1>
          <p className="text-gray-400 text-sm mt-1">Join ThumbnailGen today</p>
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

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="text-gray-300 text-sm mb-1 block font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700/50 placeholder-gray-400 transition-all text-sm"
              required
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block font-medium">
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
            <label className="text-gray-300 text-sm mb-1 block font-medium">
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
            <p className="text-xs text-gray-400 mt-1">Use at least 8 characters.</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4 accent-yellow-400 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I agree to the{" "}
              <span className="text-yellow-400 cursor-pointer hover:underline font-medium">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-yellow-400 cursor-pointer hover:underline font-medium">
                Privacy Policy
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-all mt-1 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
