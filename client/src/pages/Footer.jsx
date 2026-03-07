import { Link } from 'react-router-dom';
import logo from '/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 relative overflow-hidden mt-12">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#FFD166]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800/60 pb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 w-fit">
              <img src={logo} alt="CareerFlow Logo" className="h-8 w-auto drop-shadow-md" />
              <span className="text-2xl font-extrabold tracking-tight text-white">CareerFlow.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Organize your job search, track applications, and land your dream role with our premium AI-powered workspace. Built for modern professionals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-[#FFD166] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FFD166] transition-colors">Our Story</Link></li>
              <li><Link to="/login" className="hover:text-[#FFD166] transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="hover:text-[#FFD166] transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter (Like the video) */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4 font-medium">Get the latest features and career tips.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFD166] transition-colors w-full"
              />
              <button 
                type="submit" 
                className="bg-[#FFD166] hover:bg-[#ffc233] text-slate-900 font-bold py-2.5 rounded-lg text-sm transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            <i className="fa-regular fa-copyright"></i> {new Date().getFullYear()} CareerFlow. All rights reserved.
          </p>
          <div className="flex gap-5 text-slate-500">
            <a href="#" className="hover:text-white transition-colors text-lg font-bold"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors text-lg font-bold"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="hover:text-white transition-colors text-lg font-bold"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;