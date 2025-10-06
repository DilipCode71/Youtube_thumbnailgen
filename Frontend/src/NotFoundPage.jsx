import { Link } from 'react-router-dom';
import {  Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-yellow-400 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
        <p className="text-xl text-white/80 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            <Home size={18} />
            Go Back Home
          </Link>
         
        </div>
      </div>
    </div>
    </>
  )
}
