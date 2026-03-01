import { Link } from "react-router-dom";
import logo from '/logo2.png';
const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] via-[#fffbf0] to-[#f4f0ea] font-sans text-slate-800 selection:bg-[#FFD166]/30">
            <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="CareerFlow Logo" className="h-8 w-auto" />
                    <span className="text-xl font-extrabold tracking-tight text-slate-900">CareerFlow</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-8 font-medium text-sm">
                    <Link to="/about" className=" hidden sm:block text-slate-500 hover:text-slate-900 transition-colors">About</Link>
                    <Link to="/login" className="text-slate-500 hover:text-slate-900 transition-colors">Log in</Link>
                    <Link to="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Get Started
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 pt-16 pb-32 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 text-center lg:text-left z-10">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-600 mb-8 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#FFD166] animate-pulse"></span>
                        The #1 AI Job Tracking Tool
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Land your dream job, <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#e6b33a] to-[#FFD166]">beautifully.</span>
                    </h1>

                    <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Ditch the messy spreadsheets. Organize your applications, track interview stages, and get AI-powered resume feedback—all in one premium workspace.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-[#FFD166] text-slate-900 font-bold rounded-full shadow-lg shadow-[#FFD166]/30 hover:-translate-y-1 transition-all duration-300 text-center">
                            Start Tracking for Free
                        </Link>
                        <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-center">
                            How it works
                        </Link>
                    </div>
                </div>


                <div className="lg:w-1/2 relative w-full max-w-lg mx-auto mt-10 lg:mt-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#FFD166]/30 to-indigo-400/10 blur-3xl rounded-full -z-10"></div>
                    <div className="bg-white/60 backdrop-blur-xl border border-white shadow-2xl rounded-[2rem] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-6 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-4">


                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center group cursor-pointer hover:shadow-md transition-all">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl"><i className="fa-brands fa-google"></i></div>
                   <div>
                     <h4 className="font-bold text-slate-800">Google</h4>
                     <p className="text-xs text-slate-500 font-medium">Frontend Developer</p>
                   </div>
                 </div>
                 <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-100">✨ AI Score: 92%</span>
               </div>

               <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-all">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl"><i className="fa-brands fa-spotify"></i></div>
                   <div>
                     <h4 className="font-bold text-slate-800">Spotify</h4>
                     <p className="text-xs text-slate-500 font-medium">React Engineer</p>
                   </div>
                 </div>
                 <span className="bg-yellow-50 text-yellow-600 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-100">Interviewing 🤝</span>
               </div>


               <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between  items-center cursor-pointer hover:shadow-md transition-all">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl"><i className="fa-brands fa-amazon"></i></div>
                   <div>
                     <h4 className="font-bold text-slate-800">Amazon</h4>
                     <p className="text-xs text-slate-500 font-medium">Full Stack Intern</p>
                   </div>
                 </div>
                 <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">Applied 📩    </span>
               </div>


                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Home;