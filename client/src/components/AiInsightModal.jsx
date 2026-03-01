import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AiInsightModal = ({ job, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const { token } = useSelector(state => state.auth);
    const dummyResume = "I am a Full Stack Developer with experience in MERN Stack, React, Node.js, and MongoDB. I have built a Kanban board project.";
    const handleAnalyze = async () => {
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/ai/analyze', {
                jobDescription: job.description || "We are looking for a Full Stack Developer with experience in MERN Stack, React, Node.js, and MongoDB. Experience with Kanban boards is a plus.",
                resumeText: dummyResume
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAnalysis(res.data);
        } catch (err) {
            console.error("AI Analysis Failed:", err);
            alert("Analysis failed");
        } finally {
            setLoading(false);
        }
    }
    return (
       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-[500px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-indigo-600 p-4 flex justify-between items-center">
          <h2 className="text-white font-bold text-lg">AI Career Coach 🤖</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">✕</button>
        </div>

        <div className="p-6">
          {!analysis ? (
            <div className="text-center space-y-4">
              <p className="text-slate-600">
                Analyze your chances for <strong>{job.company}</strong>?
              </p>
              <button 
                onClick={handleAnalyze} 
                disabled={loading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : '✨ Generate Insight'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Score Circle */}
              <div className="flex justify-center">
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-indigo-100">
                  <span className="text-3xl font-bold text-indigo-600">{analysis.matchScore}%</span>
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-full border-t-transparent animate-spin-slow"></div>
                </div>
              </div>

              {/* Missing Skills */}
              <div>
                <h3 className="font-semibold text-red-500 mb-2">⚠️ Missing Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.missingSkills.map((skill, i) => (
                    <span key={i} className="bg-red-50 text-red-600 px-2 py-1 rounded text-sm border border-red-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advice */}
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <h3 className="font-semibold text-slate-700 text-sm mb-1">💡 Coach's Advice:</h3>
                <p className="text-slate-600 text-sm italic">"{analysis.advice}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiInsightModal;