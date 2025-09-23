// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const AdminLoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(''); // Purana error hatao
//          console.log("Sending to backend:", { username, password }); 
//         try {
//             // Backend login API ko call karo
//             const res = await axios.post(`${BACKEND_URL}/api/admin/login`, { username, password });
            
//             // Agar login successful hai, toh token ko local storage mein save karo
//             localStorage.setItem('token', res.data.token);
            
//             // Admin ko dashboard page par bhej do
//             navigate('/admin/dashboard');
//         } catch (err) {
//             setError('Invalid Credentials. Please try again.');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
//                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Portal</h2>
//                 <form onSubmit={handleSubmit}>
//                     {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Username</label>
//                         <input
//                             type="text"
//                             className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 mb-2">Password</label>
//                         <input
//                             type="password"
//                             className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold">
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminLoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // toast ko import karein

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`, { username, password });
            localStorage.setItem('token', res.data.token);
            toast.success('Login Successful!'); // Success toast
            navigate('/admin/dashboard');
        } catch (err) {
            toast.error('Invalid Credentials. Please try again.'); // Error toast
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Admin Portal</h2>
                <p className="text-slate-500 text-center mb-8">Welcome back! Please log in.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-slate-700 mb-2 font-semibold">Username</label>
                        <input
                            type="text"
                            className="w-full border-2 border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-slate-700 mb-2 font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full border-2 border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold disabled:bg-slate-400"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;