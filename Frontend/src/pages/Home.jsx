import { Link } from "react-router-dom";
import { Sparkles, Wand2, Zap, ShieldCheck, ChevronDown, Users, Star, ImageIcon, Plus, Minus, Quote, Check, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How does ThumbnailGen work?",
      answer: "ThumbnailGen uses AI technology to analyze your content and generate eye-catching thumbnails. Simply upload your image, choose a template, customize with our tools, and export your perfect thumbnail."
    },
    {
      question: "Is there a watermark on free thumbnails?",
      answer: "No! We believe in providing value without restrictions. All thumbnails generated with ThumbnailGen are completely free of watermarks, regardless of whether you're using free or premium features."
    },
    {
      question: "What image formats are supported?",
      answer: "We support all major image formats including JPG, PNG, and WebP. You can export your thumbnails in high-resolution formats up to 4K quality for the sharpest results on any platform."
    },
    {
      question: "Do I need design experience to use ThumbnailGen?",
      answer: "Not at all! Our tool is designed specifically for content creators without design backgrounds. The intuitive interface and AI-powered suggestions make it easy for anyone to create professional-looking thumbnails."
    },
    {
      question: "Can I use ThumbnailGen for commercial purposes?",
      answer: "Absolutely. All thumbnails you create with ThumbnailGen are yours to use for personal or commercial projects. You retain full rights to the thumbnails you generate."
    },
    {
      question: "How long does it take to generate a thumbnail?",
      answer: "Our AI-powered engine can generate a professional thumbnail in under 10 seconds. Even with customizations, you can have a ready-to-use thumbnail in less than a minute."
    },
    {
      question: "Can I customize colors and fonts?",
      answer: "Yes! ThumbnailGen offers a wide range of customization options including brand color matching, font selection from our curated library, and layout adjustments to make your thumbnail truly unique."
    }
  ];

  return (
    <>
      <section
        className="relative overflow-hidden text-white"
        aria-label="ThumbnailGen hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827]" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(60% 60% at 50% 50%, #f59e0b55 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(60% 60% at 50% 50%, #a855f755 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm">
            <Sparkles size={16} className="text-yellow-300" />
            <span>New UI • Fast, crisp, creator-friendly</span>
          </div>

          <Sparkles className="w-8 h-8 rounded-lg bg-gradient-to-r text-yellow-300 flex items-center justify-center" size={18} />
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Generate{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Stunning YouTube Thumbnails
            </span>{" "}
            Instantly
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mb-8">
            AI-powered thumbnail builder with smart layouts, brand colors, and one-click exports.
            Perfect for shorts, tutorials, and vlogs—no design skills required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Link
              to="/generator"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition active:scale-[0.99]"
            >
              <Zap size={18} />
              Get Started
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              <Wand2 size={18} />
              Learn More
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl text-sm md:text-base">
            <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              ⚡ Auto layout & safe-zone aware
            </li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              🎨 Brand colors, fonts & presets
            </li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              ⬇️ 4K export & PNG/JPG web-ready
            </li>
          </ul>
          <div className="mt-8 flex flex-col items-center gap-2 text-xs md:text-sm text-white/60">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-300" />
              <span>Secure • No watermark • Fast renders</span>
            </div>
            <div className="opacity-70">
              Launched: <span className="text-white">2025 (Beta)</span> • New UI: <span className="text-white">2025 Q3</span>
            </div>
          </div>
          <a href="#stats" className="mt-10 inline-flex items-center gap-2 text-white/70 hover:text-white transition">
            <ChevronDown size={20} />
            <span className="text-sm">See our stats</span>
          </a>
        </div>
      </section>

      <section id="stats" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1a253c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by <span className="text-yellow-400">Content Creators</span> Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-4">
                <Users className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-white/70">Active Users</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-400/10 mb-4">
                <Star className="text-purple-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">4.8<span className="text-2xl text-white/70">/5</span></h3>
              <p className="text-white/70">Out of 5 Stars</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-400/10 mb-4">
                <ImageIcon className="text-pink-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">200k+</h3>
              <p className="text-white/70">Thumbnails Generated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#1a253c] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Loved by <span className="text-yellow-400">Creators</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Quote className="text-yellow-400 mb-4" size={24} />
              <p className="text-white/90 mb-4">"ThumbnailGen saved me hours every week! The AI layouts are spot on."</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Rahul Sharma</p>
                  <p className="text-sm text-white/60">YouTuber</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Quote className="text-yellow-400 mb-4" size={24} />
              <p className="text-white/90 mb-4">"As a beginner, I was able to create professional thumbnails in minutes. Highly recommend!"</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Kajal Menariya</p>
                  <p className="text-sm text-white/60">Content Creator</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Quote className="text-yellow-400 mb-4" size={24} />
              <p className="text-white/90 mb-4">"The best thumbnail tool I've used. The AI suggestions are incredibly helpful and save so much time."</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Amit Patel</p>
                  <p className="text-sm text-white/60">Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1a253c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-400">ThumbnailGen</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-4">
                <Zap className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Generation</h3>
              <p className="text-white/70">Get a professional thumbnail in seconds with AI.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-400/10 mb-4">
                <Wand2 className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Templates</h3>
              <p className="text-white/70">Choose from hundreds of designer-made templates.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-400/10 mb-4">
                <ImageIcon className="text-pink-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">High Resolution</h3>
              <p className="text-white/70">Export in 4K for crisp, professional quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#1a253c] to-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple, Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-4xl font-bold mb-6">₹0<span className="text-xl text-white/60">/mo</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> 5 thumbnails/month</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Basic templates</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> 1080p export</li>
              </ul>
              <Link to="/generator" className="w-full inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Get Started
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">₹499<span className="text-xl text-white/60">/mo</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Unlimited thumbnails</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Premium templates</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> 4K export</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Brand kits</li>
              </ul>
              <Link to="/" className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </section>
<section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1a253c] text-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Created with <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">ThumbnailGen</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "/ThumbnailGen4.png",
        "/ThumbnailGen1.png",
        "/ThumbnailGen2.png",
        "/ThumbnailGen3.png"
      ].map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <img
            src={src}
            alt={`Thumbnail Example ${index + 1}`}
            className="w-full h-[220px] object-fill"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-16 bg-gradient-to-b from-[#1a253c] to-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="ml-4 flex-shrink-0">
                    {openFaq === index ? (
                      <Minus size={20} className="text-yellow-400" />
                    ) : (
                      <Plus size={20} className="text-yellow-400" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 border border-yellow-400/20 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-white/70 mb-4">Our support team is here to help you get the most out of ThumbnailGen</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition"
              >
                Contact Support
              </Link>
              <Link
                to="/tutorials"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-5 py-2.5 rounded-lg font-medium hover:bg-white/10 transition"
              >
                View Tutorials
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/generator"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              <Zap size={18} />
              Start Creating Now
            </Link>
          </div>
        </div>
      </section>

     
    </>
  );
}
