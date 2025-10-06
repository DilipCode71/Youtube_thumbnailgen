import { useState } from 'react';
import {
  Layout, Palette, Shield, Download,
  Eraser, Smartphone, Cloud, Users,
  Sparkles, Zap, ArrowRight, Check,
  PlayCircle, BarChart, Monitor, MousePointerClick,
  Star, Award, Lightbulb, Film, Code2
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

export default function FeaturesPages() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Layout size={28} />,
      title: "Smart AI Layouts",
      description: "AI-powered layouts that automatically arrange elements for maximum visual impact."
    },
    {
      icon: <Palette size={28} />,
      title: "Brand Colors & Fonts",
      description: "Save your brand colors and fonts for consistent thumbnails across all your content."
    },
    {
      icon: <Shield size={28} />,
      title: "Safe-Zone Preview",
      description: "See how your thumbnail will look on different devices with our safe-zone overlay."
    },
    {
      icon: <Download size={28} />,
      title: "4K High-Res Export",
      description: "Download your thumbnails in stunning 4K resolution for the sharpest visuals."
    },
    {
      icon: <Eraser size={28} />,
      title: "One-Click Background Remover",
      description: "Remove backgrounds instantly with our advanced AI detection technology."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Multi-Platform Exports",
      description: "Optimized exports for YouTube, Shorts, Instagram, and other platforms."
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Save & Manage",
      description: "Save all your projects to the cloud and access them from anywhere."
    },
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      description: "Work with your team on thumbnail designs in real-time."
    }
  ];

  const useCases = [
    {
      icon: <Film size={28} />,
      title: "YouTubers",
      description: "Create eye-catching thumbnails for your videos and shorts to boost your CTR and grow your channel."
    },
    {
      icon: <Monitor size={28} />,
      title: "Streamers",
      description: "Design professional thumbnails for your streams and highlights to attract more viewers."
    },
    {
      icon: <MousePointerClick size={28} />,
      title: "Marketers",
      description: "Generate high-converting thumbnails for your ads and promotional content."
    },
    {
      icon: <Code2 size={28} />,
      title: "Developers",
      description: "Create thumbnails for your tutorials, product demos, and tech content with ease."
    }
  ];

  const comparisons = [
    { feature: "AI-Powered Layouts", thumbnailGen: true, others: false },
    { feature: "Brand Color Matching", thumbnailGen: true, others: false },
    { feature: "One-Click Background Removal", thumbnailGen: true, others: false },
    { feature: "4K Export", thumbnailGen: true, others: true },
    { feature: "Multi-Platform Optimization", thumbnailGen: true, others: false },
    { feature: "Cloud Save & Sync", thumbnailGen: true, others: false },
    { feature: "Team Collaboration", thumbnailGen: true, others: false },
    { feature: "No Watermark", thumbnailGen: true, others: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white">
      <section className="w-full px-4 sm:px-6 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            🚀{" "}
            <TypeAnimation
              sequence={[
                'Powerful Features',
                2000,
                'For Every Creator',
                2000,
                'AI-Driven Designs',
                2000,
                '4K Thumbnails',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text"
            />{" "}
            🚀
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 px-2 sm:px-0">
            Everything you need to design high-performing YouTube thumbnails — in seconds.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                hoveredCard === index
                  ? 'hover:shadow-yellow-400/10'
                  : 'hover:shadow-purple-500/10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                hoveredCard === index
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white/5 text-yellow-400'
              } transition-colors`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perfect For <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">Every Creator</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-white/10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-purple-500/10 text-purple-400">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">ThumbnailGen</span> in Action
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Watch a quick demo to see how easy it is to create stunning thumbnails with ThumbnailGen.
          </p>
          <div className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="\Watch_quick_demo .png"
              alt="ThumbnailGen Demo"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-300 transition">
                <PlayCircle size={20} /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

<section className="container mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text p-4">
    Why <span className="text-white ">ThumbnailGen</span> Stands Out
  </h2>
  <div className="overflow-x-auto rounded-xl shadow-lg border border-white/10">
    <table className="min-w-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
      <thead className="bg-white/10">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Feature</th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-yellow-400">ThumbnailGen</th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-white/80">Others</th>
        </tr>
      </thead>
      <tbody>
        {comparisons.map((item, index) => (
          <tr
            key={index}
            className="border-t border-white/10 hover:bg-white/5 transition-colors duration-200"
          >
            <td className="px-6 py-5 text-sm text-white/90 font-medium">{item.feature}</td>
            <td className="px-6 py-5 text-center">
              {item.thumbnailGen ? (
                <div className="flex justify-center">
                  <Check size={20} className="text-green-400 drop-shadow-glow" />
                </div>
              ) : (
                <span className="text-gray-500">—</span>
              )}
            </td>
            <td className="px-6 py-5 text-center">
              {item.others ? (
                <div className="flex justify-center">
                  <Check size={20} className="text-green-400 drop-shadow-glow" />
                </div>
              ) : (
                <span className="text-gray-500">—</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Loved by <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">Creators</span> Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Raju Sharma</h4>
                <p className="text-sm text-gray-400">YouTuber</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300">"ThumbnailGen has been a game-changer for my channel. My CTR has never been higher!"</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Radha patel</h4>
                <p className="text-sm text-gray-400">Content Creator</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300">"I love how easy it is to create professional thumbnails without any design skills."</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Dheeraj Sharma</h4>
                <p className="text-sm text-gray-400">Digital Marketer</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300">"The AI suggestions are incredibly helpful and save me so much time."</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-purple-500/10 border border-yellow-400/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Thumbnails?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using ThumbnailGen to boost their click-through rates and grow their channels.
          </p>
          <Link to={"/generator"}>
            <button className="group relative bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                Start Creating Thumbnails Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-70 -z-10"></div>
            </button>
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              <span>Free trial included</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
