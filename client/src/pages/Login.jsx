import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import logo from '/logo2.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            dispatch(loginSuccess(res.data));
            navigate('/dashboard');
        } catch (err) {
            dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-400/20 flex items-center justify-center p-4 sm:p-8 font-sans">
            <div className="bg-gradient-to-br from-[#fdfbfb] via-[#fffbf0] to-[#f4f0ea] rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row max-w-5xl w-full min-h-[650px] overflow-hidden border border-white">
            
                <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-between relative">
                 
                        <Link to="/" className="text-sm font-medium text-slate-400 hover:text-[#FFD166] transition-colors flex items-center gap-2 mb-6 w-fit"> <i className="fa-solid fa-arrow-left"></i>Back to Home</Link>
                   
                    <div className="mb-8 flex justify-center md:justify-start">
                        <div className="bg-white border border-slate-100 flex items-center gap-3 px-5 py-2.5 rounded-full font-semibold shadow-xl shadow-slate-100/50">
                            <img src={logo} alt="CareerFlow Logo" className="h-8 w-auto" />
                            <span className="text-slate-900 font-bold tracking-tight text-lg">
                                CareerFlow
                            </span>
                        </div>
                    </div>
                    <div className="max-w-md w-full mx-auto flex-grow flex flex-col justify-center">
                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome back!</h1>
                            <p className="text-slate-500 text-sm font-medium">Please enter your details to Login.</p>
                        </div>
                        {error && <div className="mb-4 text-red-500 text-sm font-medium text-center bg-red-50 py-2 rounded-lg border border-red-100">{error}</div>}
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="thushar16@example.com"
                                    required
                                    className="w-full bg-white px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/20 transition-all text-sm font-medium text-slate-700"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••••••"
                                        required
                                        className="w-full bg-white px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/20 transition-all text-sm font-medium text-slate-700 tracking-wider"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                    >
                                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                    </button>
                                </div>
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors">Forgot password?</a>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#FFD166] hover:bg-[#ffc233] text-slate-900 font-bold py-3.5 rounded-full mt-2 shadow-md hover:shadow-lg transition-all disabled:opacity-70"
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>
                        <div className="mt-8 flex justify-center items-center text-xs font-medium text-slate-500 w-full max-w-md mx-auto md:mx-0">
                            <p>Don't have an account? <Link to="/register" className="text-slate-800 font-bold underline decoration-[#FFD166] decoration-2 underline-offset-2 hover:text-black transition-colors">Register for free</Link></p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block md:w-1/2 p-3'>
        <div className='w-full h-full relative rounded-[2rem] overflow-hidden shadow-inner'>
          <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl"><i className="fa-solid fa-arrow-trend-up"></i></span>
                <h3 className="font-bold text-lg">Pick up where you left off</h3>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">Your Kanban board is waiting. Keep tracking your applications and land your dream job faster.</p>
            </div>
        </div>

        </div>
            </div>
        </div>
    )
};



export default Login;