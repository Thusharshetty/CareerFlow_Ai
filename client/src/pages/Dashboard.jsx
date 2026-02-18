import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure, updateJobStatusLocal } from '../redux/jobSlice';
import AddJobModel from '../components/AddJobModel.jsx';


const columns = {
  Wishlist: { id: 'Wishlist', title: 'Wishlist 🌟' },
  Applied: { id: 'Applied', title: 'Applied 📩' },
  Interviewing: { id: 'Interviewing', title: 'Interviewing 🤝' },
  Offer: { id: 'Offer', title: 'Offer 🎉' },
  Rejected: { id: 'Rejected', title: 'Rejected ❌' },
};



const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs, loading } = useSelector((state) => state.jobs);
  const { token, user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    const fetchJobs = async () => {
      dispatch(fetchJobsStart());
      try {
        const res = await axios.get('http://localhost:5000/api/jobs', { headers: { Authorization: `Bearer ${token}` } });
        dispatch(fetchJobsSuccess(res.data));

      } catch (err) {
        dispatch(fetchJobsFailure(err.message));
      }
    }
    fetchJobs();
  }, [token, dispatch, navigate]);

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const { draggableId, destination } = result;
    const newStatus = destination.droppableId;
    dispatch(updateJobStatusLocal({ id: draggableId, status: newStatus }));
    try {
      await axios.put(`http://localhost:5000/api/jobs/${draggableId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error("Failed to update job status", err);
    }
  }
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-slate-800'>CareerFlow Board</h1>
        <div className="flex items-center gap-4">
          <span className="text-slate-600">Welcome, {user?.username}</span>
          <button 
             onClick={() => setIsModalOpen(true)}
             className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow transition"
           >
             + Add Job
           </button>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
      {loading ? <p>Loading...</p> : (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {Object.values(columns).map((column) => (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-white p-4 rounded-lg shadow-md w-80 flex-shrink-0 min-h-[500px]"
                  >
                    <h2 className="font-bold text-lg mb-4 text-slate-700">{column.title}</h2>

                    {jobs
                      .filter((job) => job.status === column.id)
                      .map((job, index) => (
                        <Draggable key={job._id} draggableId={job._id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-slate-50 p-4 mb-3 rounded border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <h3 className="font-semibold text-slate-800">{job.company}</h3>
                              <p className="text-sm text-slate-600">{job.position}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      )}
      {isModalOpen && <AddJobModel onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
export default Dashboard;