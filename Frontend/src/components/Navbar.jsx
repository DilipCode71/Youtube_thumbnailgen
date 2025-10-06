import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, User, LogOut, Trash2, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Navbar() {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfilePopUp, setShowProfilePopUp] = useState(false);
  const profilePopUpRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profilePopUpRef.current && !profilePopUpRef.current.contains(e.target)) {
        setShowProfilePopUp(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  const handleDeleteAccount = async () => {
  const token = localStorage.getItem("token");

  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  });

  if (!result.isConfirmed) return; 

  try {
    const response = await fetch(  `${BASE_URL}/user//delete-account`,{
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setUser(null);
      navigate("/");
      Swal.fire(
        'Deleted!',
        'Your account has been deleted.',
        'success'
      );
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error deleting account:", error);
    Swal.fire(
      'Error!',
      error.message || "Failed to delete account. Please try again.",
      'error'
    );
  }
};

  return (
    <nav className="bg-[#1e293b] dark:bg-[#111827] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-20 h-8  flex items-center justify-center">
  <img
    src="/ThumbnailGen_Logo.png"  
    alt="ThumbnailGen Logo"
    className="w-25 h-15 object-contain rounded-3xl"  
  />

            
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            ThumbnailGen
          </span>
        </Link>


        <Link to="/" className="flex items-center">

</Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/generator"
            className="px-3 py-1 text-white dark:text-gray-100 hover:text-yellow-400 transition rounded-md hover:bg-[#2d3a4e]"
          >
            Generator
          </Link>
          <Link
            to="/features"
            className="px-3 py-1 text-white dark:text-gray-100 hover:text-yellow-400 transition rounded-md hover:bg-[#2d3a4e]"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="px-3 py-1 text-white dark:text-gray-100 hover:text-yellow-400 transition rounded-md hover:bg-[#2d3a4e]"
          >
            About
          </Link>

          {isLoggedIn ? (
            <div className="relative" ref={profilePopUpRef}>
              <button
                onClick={() => setShowProfilePopUp(!showProfilePopUp)}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all ${
                  showProfilePopUp
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-500 hover:bg-purple-600 text-white"
                }`}
              >
                <User size={16} />
                <span className="hidden lg:inline">{user?.name || "Profile"}</span>
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    showProfilePopUp ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showProfilePopUp && (
                <div className="absolute right-0 mt-2 w-64 bg-[#1e293b] rounded-lg shadow-xl z-50 overflow-hidden border border-gray-700">
                  <div className="p-4 border-b border-gray-700">
                    <p className="font-medium truncate">{user?.name}</p>
                    <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                  </div>
                  <div className="p-1">
                    <button
                      onClick={handleDeleteAccount}
                      className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 hover:text-red-300 transition flex items-center gap-2"
                    >
                      <Trash2 size={16} /> Delete Account
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-white hover:bg-gray-700 transition flex items-center gap-2"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1.5 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-400 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden ml-4 p-2 rounded-md text-white dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-2 sm:px-3">
          <Link
            to="/generator"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-[#2d3a4e] transition"
          >
            Generator
          </Link>
          <Link
            to="/features"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-[#2d3a4e] transition"
          >
            Features
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-[#2d3a4e] transition"
          >
            About
          </Link>

          {isLoggedIn ? (
            <div ref={profilePopUpRef}>
              <button
                onClick={() => setShowProfilePopUp(!showProfilePopUp)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-white font-medium transition-all ${
                  showProfilePopUp ? "bg-purple-600" : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{user?.name || "Profile"}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showProfilePopUp ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showProfilePopUp && (
                <div className="mt-1 rounded-lg shadow-xl overflow-hidden border border-gray-700">
                  <div className="p-3 bg-[#2d3a4e] border-b border-gray-700">
                    <p className="font-medium truncate">{user?.name}</p>
                    <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                  </div>
                  <div className="p-1 bg-[#2d3a4e]">
                    <button
                      onClick={() => {
                        handleDeleteAccount();
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 hover:text-red-300 transition flex items-center gap-2"
                    >
                      <Trash2 size={16} /> Delete Account
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-white hover:bg-gray-700 transition flex items-center gap-2"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-2 rounded-md bg-yellow-400 text-black font-medium text-center hover:bg-yellow-300 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-2 rounded-md bg-pink-500 text-white font-medium text-center hover:bg-pink-400 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
