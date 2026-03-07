import { Link } from "react-router-dom";
import logo from '/logo2.png';
import Footer from "./Footer";  
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


          <div className="border-y border-slate-200/60 bg-white/40 backdrop-blur-sm py-10 mt-10">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Designed for applicants targeting top tech companies</p>
        <div className="flex justify-center gap-8 md:gap-16 opacity-40 grayscale flex-wrap px-4">
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter">Google</span>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter">Amazon</span>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter">Netflix</span>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter">Spotify</span>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter">Meta</span>
        </div>
      </div>

      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Everything you need to land the offer.</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Stop losing track of where you applied. CareerFlow gives you the tools to stay organized, prepare effectively, and ace your interviews.</p>
        </div>

        {/* --- FEATURE 1: Kanban Board --- image left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 mt-24">

         
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/70 backdrop-blur-sm border border-slate-100 shadow-xl rounded-3xl p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Kanban Board</p>
              
              <div className="grid grid-cols-3 gap-3">
               
                <div className="bg-slate-50 rounded-2xl p-3">
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Wishlist</p>
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                    <p className="text-xs font-bold text-slate-700">OpenAI</p>
                    <p className="text-xs text-slate-400">ML Engineer</p>
                  </div>
                </div>
               
                <div className="bg-slate-50 rounded-2xl p-3">
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Applied</p>
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                    <p className="text-xs font-bold text-slate-700">Amazon</p>
                    <p className="text-xs text-slate-400">Full Stack</p>
                  </div>
                </div>
                
                <div className="bg-[#FFD166]/10 rounded-2xl p-3">
                  <p className="text-xs font-bold text-[#e6b33a] mb-2 uppercase">Interview</p>
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-[#FFD166]/30">
                    <p className="text-xs font-bold text-slate-700">Spotify</p>
                    <p className="text-xs text-slate-400">React Eng</p>
                    <span className="mt-1 inline-block text-xs bg-yellow-50 text-yellow-600 font-bold px-2 py-0.5 rounded-full border border-yellow-100"><i className="fa-solid fa-handshake"></i> Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <span className="inline-block bg-[#FFD166]/20 text-[#c49a00] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Visual Pipeline</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
              Track every application, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6b33a] to-[#FFD166]">visually.</span>
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              Drag and drop your jobs across stages — Wishlist → Applied → Interview → Offer. Always know where you stand, without the messy spreadsheets.
            </p>
            <Link to="/register" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-full hover:bg-slate-700 transition-all">
              Try the board <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* --- FEATURE 2: AI Insights --- text left, visual card right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">

         
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/70 backdrop-blur-sm border border-slate-100 shadow-xl rounded-3xl p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">AI Match Insights</p>
             
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-700">Resume Match Score</span>
                <span className="text-sm font-extrabold text-emerald-500">82%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-5">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" style={{ width: "82%" }}></div>
              </div>
              
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Skills to add</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-50 text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-100">GraphQL <i className="fa-regular fa-circle-xmark"></i></span>
                <span className="bg-red-50 text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-100">Docker <i className="fa-regular fa-circle-xmark"></i></span>
                <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full border border-green-100">React <i className="fa-regular fa-circle-check"></i></span>
                <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full border border-green-100">TypeScript <i className="fa-regular fa-circle-check"></i></span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-emerald-100">AI Powered</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
              AI that actually reads <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6b33a] to-[#FFD166]">the job description.</span>
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              Paste any job description. Get a skill-gap breakdown and resume tips in seconds. Know exactly what to add before you hit apply.
            </p>
            <Link to="/register" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-full hover:bg-slate-700 transition-all">
              See AI insights <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

      </section>

      {/* --- SECTION 3: Testimonials --- */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          
          <div className="text-center mb-14">
            <p className="text-[#FFD166] text-xs font-bold uppercase tracking-widest mb-3">Wall of Love</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Loved by developers at top companies.</h2>
            <p className="text-slate-400 text-base">⭐⭐⭐⭐⭐ &nbsp; 4.9/5 from 300+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-[#FFD166]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD166] flex items-center justify-center font-extrabold text-slate-900">S</div>
                <div>
                  <p className="font-bold text-white text-sm">Sarah K.</p>
                  <p className="text-slate-400 text-xs">Frontend Engineer @ Google</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Finally ditched my messy Notion board. CareerFlow is exactly what I was missing during my search. Clean, fast, and actually useful."
              </p>
            </div>

            
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-[#FFD166]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD166] flex items-center justify-center font-extrabold text-slate-900">M</div>
                <div>
                  <p className="font-bold text-white text-sm">Marcus T.</p>
                  <p className="text-slate-400 text-xs">SWE @ Stripe</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "The AI resume feedback alone is worth it. It pointed out skill gaps I hadn't even noticed. Got 3 more callbacks after updating my resume."
              </p>
            </div>

            
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-[#FFD166]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD166] flex items-center justify-center font-extrabold text-slate-900">P</div>
                <div>
                  <p className="font-bold text-white text-sm">Priya R.</p>
                  <p className="text-slate-400 text-xs">ML Engineer @ Meta</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Landed my dream role in 6 weeks. The Kanban view kept me sane throughout the whole process. Can't imagine job hunting without it."
              </p>
            </div>

          </div>

          
          <p className="text-center text-slate-500 text-sm mt-12">
            Join <span className="text-white font-bold">5,000+</span> developers already tracking smarter.
          </p>

        </div>
      </section>

            <Footer />
        </div>
    )
};

export default Home;