import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import {fetchJobsStart, fetchJobsSuccess, fetchJobsFailure, updateJobStatusLocal} from '../redux/jobSlice';


const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
            {user && <p>Hello, {user.email}</p>}
            <button onClick={handleLogout} className="mt-5 bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
};
export default Dashboard;