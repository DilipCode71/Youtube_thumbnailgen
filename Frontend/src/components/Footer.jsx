import { Github, Twitter, Linkedin, Mail, Sparkles, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000); 
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#111827] to-[#0f172a] text-gray-300 pt-16 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-yellow-400" size={20} />
                <h3 className="text-xl font-bold text-white">Stay in the Loop</h3>
              </div>
              <p className="text-gray-400">
                Join thousands of creators and get the latest updates, tips, and offers.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 flex-1 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-lg font-medium hover:bg-yellow-300 transition whitespace-nowrap"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                {!subscribed && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/ThumbnailGen_Logo.png"
                alt="ThumbnailGen Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                ThumbnailGen
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              AI-powered YouTube Thumbnail Generator that helps creators design stunning
              thumbnails in seconds. Built for speed, style, and simplicity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/generator" className="hover:text-yellow-400 transition">Generator</Link></li>
              <li><Link to="/features" className="hover:text-yellow-400 transition">Features</Link></li>
              <li><Link to="/templates" className="hover:text-yellow-400 transition">Templates</Link></li>
              <li><Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
              <li><Link to="/tutorials" className="hover:text-yellow-400 transition">Tutorials</Link></li>
              <li><Link to="/docs" className="hover:text-yellow-400 transition">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-yellow-400 transition">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-800">
          <div className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ThumbnailGen. Made with{" "}
            <Heart size={14} className="inline text-pink-500 fill-current" /> for creators.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Linkedin size={20} /></a>
            <a href="mailto:hello@thumbnailgen.com" className="text-gray-400 hover:text-yellow-400 transition"><Mail size={20} /></a>
            <span className="text-xs text-gray-500 hidden md:block">v2.1.0 • 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
