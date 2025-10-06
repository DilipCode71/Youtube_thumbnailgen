import { useState, useEffect } from 'react';
import { Sparkles, Download, ArrowRight, Grid2X2, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GeneratorPage() {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (!token || !userData) {
      navigate("/login");
    }
  }, [navigate]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
          `${BASE_URL}/user/generate-thumbnail`,
        { prompt },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setGeneratedImages(response.data.results || []);
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Failed to generate thumbnail');
    } finally {
      setLoading(false);
    }
  };

const downloadImage = (imageUrl) => {
  if (imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `thumbnail-${prompt.replace(/\s+/g, '-').toLowerCase()}.webp`;
     link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            <Film className="inline mr-3 mb-1" />
            YouTube Thumbnail Gen AI
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create eye-catching YouTube thumbnails in seconds. Just describe your idea!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1e293b] to-[#1e293b] rounded-2xl border border-gray-700 p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-yellow-400" />
              Describe Your Thumbnail
            </h2>
            <textarea
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all mb-4"
              rows="4"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Iron Man vs Thanos, epic battle, 4K, cinematic lighting, YouTube thumbnail style"
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-gray-900 font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="animate-pulse">Generating</span>
                  <Sparkles className="animate-bounce" />
                </>
              ) : (
                <>
                  Generate Thumbnail
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#1e293b] to-[#1e293b] rounded-2xl border border-gray-700 p-6 shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Film size={20} className="text-yellow-400" />
              Your YouTube Thumbnails
            </h2>
            {loading ? (
              <div className="w-full h-[300px] bg-gray-800 rounded-xl animate-pulse flex items-center justify-center relative border border-gray-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                  <p className="text-gray-400">Generating your thumbnails...</p>
                  <p className="text-xs text-gray-500 mt-1">This may take a few seconds</p>
                </div>
              </div>
            ) : generatedImages.length > 0 ? (
              <div className="space-y-6">
                {generatedImages.map((image, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group hover:border-yellow-400 transition-all">
                    <div className="relative">
                      <img
                        src={image.origin || image}
                        alt={`Generated Thumbnail ${index + 1}`}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                        <button
                          onClick={() => downloadImage(image.origin || image)}
                          className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-gray-900 font-medium py-1.5 px-3 rounded-lg text-sm transition-all"
                        >
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-[300px] bg-gray-800 rounded-xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-700">
                <Film size={48} className="mb-4 opacity-50" />
                <p>Your generated thumbnails will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratorPage;
