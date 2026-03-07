import { Link } from 'react-router-dom';
import logo from '/logo2.png';
import founderPhoto from '/Founder.png';
import Footer from './Footer';

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#fdfbfb] via-[#fffbf0] to-[#f4f0ea] font-sans text-slate-800 selection:bg-[#FFD166]/30'>

        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="CareerFlow Logo" className="h-8 w-auto" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900">CareerFlow</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-8 font-medium text-sm">
          <Link to="/" className="hidden sm:block text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/login" className="text-slate-500 hover:text-slate-900 transition-colors">Log in</Link>
          <Link to="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto px-6 pt-16 pb-24'> 
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Organizing the chaos of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6b33a] to-[#FFD166]">job hunting.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Job searching is stressful enough. We built CareerFlow to give developers and professionals a beautiful, intelligent workspace to track their progress and land their dream roles.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-24'>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-indigo-100">
              <i className="fa-solid fa-clipboard"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Visual Pipeline</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Say goodbye to messy Excel sheets. Our intuitive Kanban board lets you drag and drop applications from Wishlist to Offer with zero friction.
            </p>
          </div>


          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-[#FFD166]/30 shadow-2xl shadow-[#FFD166]/10 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD166]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-yellow-100 relative z-10">
         <i className="fa-solid fa-robot"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">AI Career Coach</h3>
            <p className="text-slate-500 text-sm leading-relaxed relative z-10">
              Powered by advanced AI, get instant feedback on your resume. We compare your skills to the job description and tell you exactly what you're missing.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-emerald-100">
                <i className="fa-solid fa-cubes"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Built for Clarity</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Designed with a premium, distraction-free interface so you can focus on what actually matters: preparing for your next big interview.
            </p>
          </div>
        </div>

       <div className='bg-white/60 backdrop-blur-md rounded-[3rem] p-10 lg:p-14 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto shadow-2xl shadow-slate-200/40 border border-white relative overflow-hidden'>
       <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD166]/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
       <div className='w-full md:w-1/3 flex-shrink-0'>
       <div className='w-full h-full relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50"'>
         <img 
                src={founderPhoto} 
                alt="Your CareerFlow Founder" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white">
                <span className="text-sm font-semibold">Founder & Developer</span>
              </div>
       </div>
       </div>

       <div className='w-full md:w-2/3 space-y-6'>
       <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A personal vision <br className="hidden md:block" />
              for finding your flow.
            </h2>
            <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
              "Finding your next big career step shouldn't be defined by cognitive load. After too many job searches spent staring at cold, confusing spreadsheets, I realized something important: tech needs to be humanized. I didn't want a tool that just tracked applications; I wanted a workspace that helped me find my focus. That's why I built CareerFlow. This is a premium workspace for managers and developers—designed to take the stress away so you can focus on preparation and landing the dream role. If you have been feeling the spreadsheet chaos, I invite you to try a different path. Organize beautifully, and find your flow."
            </p>
            <div className='flex items-center gap-3 pt-4'>
              <div className="w-12 h-12 bg-[#FFD166] rounded-full flex items-center justify-center font-bold text-slate-900 text-xl border-2 border-white">
                T
              </div>
              <div>
                <span className="block font-bold text-slate-800">Thushar Shetty</span>
                <span className="block text-xs text-slate-400 font-medium">CareerFlow Developer</span>
              </div>
            </div>
       </div>
       </div>



        <div className='bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl mt-24'>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FFD166]/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Ready to find your flow?
          </h2>

          <p className="text-slate-300 mb-10 max-w-xl mx-auto relative z-10">
            Join thousands of professionals who are organizing their job search and landing better roles faster.
          </p>
          <Link to="/register" className="inline-block px-10 py-4 bg-[#FFD166] text-slate-900 font-bold rounded-full shadow-lg hover:bg-[#ffc233] hover:shadow-[#FFD166]/20 hover:-translate-y-1 transition-all duration-300 relative z-10">
            Create your free account
          </Link>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default About;