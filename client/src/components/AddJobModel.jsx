import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addJobSuccess } from "../redux/jobSlice";

const AddJobModel = ({ onClose }) => {
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        status: 'Wishlist',
        jobDescription: ''
    });
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/jobs', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch(addJobSuccess(res.data));
            onClose();
        } catch (err) {
            alert(err.response?.data?.message || 'Error adding job');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                <h2 className="text-xl font-bold mb-4">Add New Application</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        placeholder="Company (e.g. Google)"
                        className="w-full p-2 border rounded"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                    />
                    <input
                        placeholder="Position (e.g. Frontend Dev)"
                        className="w-full p-2 border rounded"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        required
                    />
                    <select
                        className="w-full p-2 border rounded"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                        <option value="Wishlist">Wishlist</option>
                        <option value="Applied">Applied</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    <textarea
                        placeholder="Paste Job Description here (for AI)..."
                        className="w-full p-2 border rounded h-24"
                        value={formData.jobDescription}
                        onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                            {loading ? 'Adding...' : 'Add Job'}
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default AddJobModel;