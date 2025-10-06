import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs,
  FaPython, FaGitAlt, FaGithub, FaClock, FaDatabase
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiC, SiCplusplus, SiTailwindcss, SiRender
} from "react-icons/si";
import {
  Sparkles, Target, Eye, ArrowRight, Zap, Code, Palette,
  Brain, Server, Users, Award, Heart, Rocket, Lightbulb, ShieldCheck
} from "lucide-react";

export default function AboutPage() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={22} />, color: "from-orange-500 to-red-500", proficiency: 90 },
    { name: "CSS", icon: <FaCss3Alt size={22} />, color: "from-blue-500 to-cyan-500", proficiency: 85 },
    { name: "JavaScript", icon: <FaJs size={22} />, color: "from-yellow-400 to-amber-400", proficiency: 88 },
    { name: "Bootstrap", icon: <FaBootstrap size={22} />, color: "from-purple-600 to-indigo-500", proficiency: 80 },
    { name: "React", icon: <FaReact size={22} />, color: "from-cyan-400 to-blue-500", proficiency: 85 },
    { name: "Node.js", icon: <FaNodeJs size={22} />, color: "from-green-500 to-emerald-500", proficiency: 82 },
    { name: "Express.js", icon: <SiExpress size={22} />, color: "from-gray-400 to-gray-600", proficiency: 80 },
    { name: "MongoDB", icon: <SiMongodb size={22} />, color: "from-green-400 to-emerald-400", proficiency: 78 },
    { name: "Python", icon: <FaPython size={22} />, color: "from-yellow-400 to-blue-500", proficiency: 75 },
    { name: "Python + DSA", icon: <FaPython size={22} />, color: "from-orange-400 to-yellow-500", proficiency: 70 },
    { name: "C", icon: <SiC size={22} />, color: "from-blue-500 to-indigo-500", proficiency: 65 },
    { name: "C++", icon: <SiCplusplus size={22} />, color: "from-blue-500 to-indigo-700", proficiency: 68 },
    { name: "Git", icon: <FaGitAlt size={22} />, color: "from-orange-500 to-red-500", proficiency: 85 },
    { name: "GitHub", icon: <FaGithub size={22} />, color: "from-gray-600 to-black", proficiency: 88 },
    { name: "AI/ML", icon: <Sparkles size={22} />, color: "from-pink-400 to-purple-500", proficiency: 70 },
    { name: "Cron-job.org", icon: <FaClock size={22} />, color: "from-teal-400 to-cyan-500", proficiency: 75 },
    { name: "Render.com", icon: <SiRender size={22} />, color: "from-purple-500 to-pink-500", proficiency: 80 },
    { name: "TailwindCSS", icon: <SiTailwindcss size={22} />, color: "from-cyan-400 to-blue-500", proficiency: 90 },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Code size={24} /> },
    { number: "1.5+", label: "Years Experience", icon: <Award size={24} /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart size={24} /> },
    { number: "24/7", label: "Available", icon: <Server size={24} /> },
  ];

  const features = [
    {
      title: "AI-Powered",
      desc: "Generate stunning thumbnails in seconds with our advanced AI.",
      icon: <Brain size={24} className="text-purple-400" />
    },
    {
      title: "Easy to Use",
      desc: "No design skills needed. Just input your idea and let AI do the rest.",
      icon: <Palette size={24} className="text-yellow-400" />
    },
    {
      title: "Fast & Reliable",
      desc: "Get your thumbnails ready in seconds, every time.",
      icon: <Rocket size={24} className="text-red-400" />
    },
    {
      title: "Secure",
      desc: "Your data is safe with us. We never share your information.",
      icon: <ShieldCheck size={24} className="text-green-400" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 p-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
            Built by Dilip Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A full-stack developer and AI enthusiast, passionate about creating tools that empower creators. AI-powered tool to generate stunning YouTube thumbnails in seconds. No design skills required.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl backdrop-blur-sm max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="/MyImage.jpg"
                    alt="Dilip Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black rounded-full p-2 shadow-lg">
                <Sparkles size={16} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">Dilip Developer</span>
              </h2>
              <p className="text-gray-300 mb-4">
                I'm a full-stack developer with a deep interest in AI and automation. I built ThumbnailGen to help creators generate professional thumbnails without needing design skills.
              </p>
              <p className="text-gray-300">
                My goal is to make content creation easier and more accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-4 border border-white/10 text-center transition-all duration-300 hover:shadow-lg hover:border-yellow-400/30"
            >
              <div className="text-yellow-400 flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            How ThumbnailGen Works
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Input Your Idea",
              desc: "Describe your video or upload a script. Our AI understands your content.",
              icon: <Lightbulb size={24} className="text-yellow-400" />,
            },
            {
              step: "2",
              title: "AI Generates Thumbnails",
              desc: "Our AI creates multiple thumbnail options tailored to your content.",
              icon: <Brain size={24} className="text-purple-400" />,
            },
            {
              step: "3",
              title: "Download & Use",
              desc: "Choose your favorite, download, and use it for your video.",
              icon: <Rocket size={24} className="text-red-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-6 border border-white/10 flex-1"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
                <span className="text-yellow-400 font-bold">{item.step}</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-white/10">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            Why Choose ThumbnailGen?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:shadow-lg hover:border-yellow-400/30"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            The ThumbnailGen Story
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            onClick={() => setIsStoryOpen(true)}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-2xl p-8 border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-yellow-400/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                <Lightbulb size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">How It All Started</h3>
            </div>
            <p className="text-gray-300">
              From a simple idea to a powerful AI tool, discover the journey behind ThumbnailGen and how it's helping creators worldwide.
            </p>
            <div className="mt-6 flex items-center gap-2 text-yellow-400 font-medium">
              Read Our Story <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            Tech Stack & Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-4 border border-white/10 shadow-md transition-all duration-300 hover:shadow-xl hover:border-yellow-400/30"
            >
              <div className={`bg-gradient-to-r ${skill.color} rounded-lg p-2 mb-2 text-white shadow-md`}>
                {skill.icon}
              </div>
              <span className="font-medium text-sm text-center">{skill.name}</span>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">
          The Team
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 p-1 mx-auto mb-6">
              <img
                src="/MyImage.jpg"
                alt="Dilip Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Dilip Developer</h3>
            <p className="text-gray-400 mb-1">Founder & Full-Stack Developer</p>
            <p className="text-gray-300 max-w-xl mx-auto">
              Dilip is the creator of ThumbnailGen. With expertise in AI, web development, and UI/UX, he built this tool to help creators generate professional thumbnails effortlessly.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <Target size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To make thumbnail creation easy, fast, and accessible for everyone. We believe that great content deserves great visuals, and nobody should be held back by complex design tools.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <Eye size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-300">
              Empowering creators with AI tools that save time and boost creativity. We envision a future where content creation is more about ideas and less about technical hurdles.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {isStoryOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
          >
            <button
              onClick={() => setIsStoryOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text mb-2">
                The ThumbnailGen Journey
              </h2>
              <p className="text-gray-400">From Idea to Reality</p>
            </div>
            <div className="space-y-6 text-gray-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0">
                  <Lightbulb size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">The Spark</h3>
                  <p>
                    It all started when Dilip, a passionate developer and content creator, noticed how much time creators spent designing thumbnails. He thought, "What if AI could do this instantly?"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Brain size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Building the AI</h3>
                  <p>
                    Months of research and development went into training the perfect AI model. We tested hundreds of designs to ensure ThumbnailGen could create thumbnails that truly stand out.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <Rocket size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Launch & Growth</h3>
                  <p>
                    Since our launch in 2024, ThumbnailGen has helped thousands of creators save time and grow their channels. We're constantly improving based on user feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Heart size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
                  <p>
                    We believe every creator deserves professional thumbnails without the hassle. Our mission is to make content creation easier and more accessible for everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src="\ThumbnailGen_Logo.png"
                alt="ThumbnailGen Interface"
                className="rounded-lg max-w-10 h-auto border border-white/10"
              />
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsStoryOpen(false)}
                className="bg-gradient-to-r from-yellow-400 to-purple-500 text-black px-6 py-2 rounded-lg font-medium hover:shadow-lg transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="container mx-auto px-4 py-16 md:py-20"
      >
        <div className="bg-gradient-to-r from-yellow-400/10 to-purple-500/10 border border-yellow-400/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">Create Amazing Thumbnails?</span>
          </h2>
          <p className="text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are already using ThumbnailGen to boost their click-through rates and grow their channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e293b] to-[#0f172a] border border-white/10 px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition"
            >
              Explore Features
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/generator"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-purple-500 text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/20 transition"
            >
              Get Started
              <Zap size={16} className="group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Link
          to="/generator"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 text-black shadow-lg hover:shadow-xl transition-all"
        >
          <Zap size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
