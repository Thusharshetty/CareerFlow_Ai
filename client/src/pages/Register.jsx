import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:''
  });
  const [error,setError]=useState('');
  const[loading,setLoading]=useState(false);
  const[showPassword,setShowPassword]=useState(false);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError('');
    try{
      await axios.post('http://localhost:5000/api/auth/register',formData);
      navigate('/login');
    }catch(err){
      setError(err.response?.data?.message || 'Registration failed');
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-slate-400/20 flex items-center justify-center p-4  sm:p-8 font-sans'>
      <div className='bg-gradient-to-br from-[#fdfbfb] via-[#fffbf0] to-[#f4f0ea] rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row max-w-5xl w-full min-h-[650px] overflow-hidden border border-white"'>
        <div className='w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-between relative'>
         <Link to="/" className="text-sm font-medium text-slate-400 hover:text-[#FFD166] transition-colors flex items-center gap-2 mb-6 w-fit"> <i className="fa-solid fa-arrow-left"></i>Back to Home</Link>

        <div className="mb-8">
            <span className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-full font-semibold shadow-sm">
             <img src="/logo2.png" alt="CareerFlow Logo" className="h-6 w-auto mr-2 inline-block" /> CareerFlow
            </span>
          </div>
          <div className='max-w-md w-full mx-auto flex-grow flex flex-col justify-center'>
            <div className='mb-8 text-center md:text-left'>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Create an account</h1>
              <p className='text-slate-500 text-sm font-medium'>Join us today and unlock your career potential</p>
            </div>
            {error && <div className="mb-4 text-red-500 text-sm font-medium text-center">{error}</div>}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Full name</label>
                <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
                placeholder='Thushar shetty'
                className="w-full bg-white px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/20 transition-all text-sm font-medium text-slate-700"
                ></input>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="thushar16@gmail.com"
                  required
                  className="w-full bg-white px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/20 transition-all text-sm font-medium text-slate-700"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Password</label>
                <div className="relative">
                  <input
                  type={showPassword?'text':'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder='********'
                  className="w-full bg-white px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/20 transition-all text-sm font-medium text-slate-700 tracking-wider"
                  />
                  <button
                  type='button'
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                     {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                  </button>
                 
                </div>
              </div>
              <button
              type='submit'
              disabled={loading}
              className="w-full bg-[#FFD166] hover:bg-[#ffc233] text-slate-900 font-bold py-3.5 rounded-full mt-6 shadow-md hover:shadow-lg transition-all disabled:opacity-70"
              >
                {loading ? 'Creating Account...' : 'Create Account'}

              </button>
            </form>
          </div>
          <div className="mt-8 flex justify-between items-center text-xs font-medium text-slate-500 w-full max-w-md mx-auto md:mx-0">
            <p>Have any account? <Link to="/login" className="text-slate-800 font-bold underline decoration-[#FFD166] decoration-2 underline-offset-2">Login</Link></p>
            <a href="#" className="hover:text-slate-800 underline">Terms & Conditions</a>
          </div>
        </div>
        <div className='hidden md:block md:w-1/2 p-3'>
        <div className='w-full h-full relative rounded-[2rem] overflow-hidden shadow-inner'>
          <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-1">Join the community</h3>
              <p className="text-sm text-white/80">Thousands of developers are tracking their career growth with us.</p>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};
export default Register;