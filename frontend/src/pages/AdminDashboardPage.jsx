// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const AdminDashboardPage = () => {
//     const [questions, setQuestions] = useState([]);
//     const [newQuestion, setNewQuestion] = useState({ text: '', type: 'radio', options: '' });
//     const navigate = useNavigate();

//     // Local storage se token nikalo
//     const token = localStorage.getItem('token');

//     // Axios ke liye config, taaki har protected request ke saath token jaaye
//     const axiosConfig = { 
//         headers: { 
//             'Authorization': `Bearer ${token}` 
//         } 
//     };

//     // Page load hote hi saare questions fetch karo
//     useEffect(() => {
//         if (!token) {
//             navigate('/admin-login');
//             return;
//         }
//         fetchQuestions();
//     }, []);

//     const fetchQuestions = async () => {
//         try {
//             const res = await axios.get(`${BACKEND_URL}/api/questions`);
//             setQuestions(res.data.questions);
//         } catch (err) {
//             console.error("Failed to fetch questions:", err);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/admin-login');
//     };

//     const handleAddQuestion = async (e) => {
//         e.preventDefault();
//         // Options ko comma se alag karke array banao
//         const questionData = {
//             ...newQuestion,
//             options: newQuestion.options.split(',').map(opt => opt.trim())
//         };
//         try {
//             // Naya question add karne ke liye token ke saath POST request bhejo
//             await axios.post(`${BACKEND_URL}/api/questions`, questionData, axiosConfig);
//             fetchQuestions(); // List refresh karo
//             setNewQuestion({ text: '', type: 'radio', options: '' }); // Form reset karo
//         } catch (err) {
//             alert('Failed to add question. Your session might have expired. Please log in again.');
//             console.error(err);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm("Are you sure you want to delete this question?")) {
//             try {
//                 // Delete karne ke liye token ke saath DELETE request bhejo
//                 await axios.delete(`${BACKEND_URL}/api/questions/${id}`, axiosConfig);
//                 fetchQuestions(); // List refresh karo
//             } catch (err) {
//                 alert('Failed to delete question. Your session might have expired. Please log in again.');
//                 console.error(err);
//             }
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 md:p-8">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//                 <button 
//                     onClick={handleLogout}
//                     className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
//                 >
//                     Logout
//                 </button>
//             </div>

//             {/* Add Question Form */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//                 <h2 className="text-2xl font-bold mb-4">Add New Question</h2>
//                 <form onSubmit={handleAddQuestion} className="space-y-4">
//                     <input type="text" placeholder="Question Text" value={newQuestion.text} onChange={e => setNewQuestion({...newQuestion, text: e.target.value})} className="w-full border p-2 rounded" required />
//                     <select value={newQuestion.type} onChange={e => setNewQuestion({...newQuestion, type: e.target.value})} className="w-full border p-2 rounded">
//                         <option value="radio">Radio (Single Choice)</option>
//                         <option value="checkbox">Checkbox (Multiple Choice)</option>
//                     </select>
//                     <textarea placeholder="Options (comma-separated, e.g., Yes,No,Maybe)" value={newQuestion.options} onChange={e => setNewQuestion({...newQuestion, options: e.target.value})} className="w-full border p-2 rounded" required />
//                     <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold">Add Question</button>
//                 </form>
//             </div>

//             {/* Existing Questions List */}
//             <div>
//                 <h2 className="text-2xl font-bold mb-4">Manage Questions ({questions.length})</h2>
//                 <div className="space-y-3">
//                     {questions.map(q => (
//                         <div key={q._id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
//                             <p className="flex-1 mr-4">{q.text} <span className="text-xs bg-gray-300 text-gray-700 p-1 rounded">{q.type}</span></p>
//                             <button onClick={() => handleDelete(q._id)} className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 text-xs font-bold">DELETE</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboardPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; // toast ko import karein
// ... baaki saare imports
import QuestionItem from '../components/QuestionItem'; // Naya component import karein


const AdminDashboardPage = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({ text: '', type: 'radio', options: '' });
    const token = localStorage.getItem('token');
    const axiosConfig = { headers: { 'Authorization': `Bearer ${token}` } };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/questions`);
            setQuestions(res.data.questions);
        } catch (err) {
            console.error("Failed to fetch questions:", err);
            toast.error("Could not fetch questions.");
        }
    };

    const handleAddQuestion = async (e) => {
        e.preventDefault();
        const questionData = {
            ...newQuestion,
            options: newQuestion.options.split(',').map(opt => opt.trim())
        };
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/questions`, questionData, axiosConfig);
            toast.success('Question added successfully!'); // Success toast
            fetchQuestions();
            setNewQuestion({ text: '', type: 'radio', options: '' });
        } catch (err) {
            toast.error('Failed to add question.');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this question?")) {
            try {
                await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/questions/${id}`, axiosConfig);
                toast.success('Question deleted!'); // Success toast
                fetchQuestions();
            } catch (err) {
                toast.error('Failed to delete question.');
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Dashboard</h1>

            {/* Add Question Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold text-slate-700 mb-6">Add New Question</h2>
                <form onSubmit={handleAddQuestion} className="space-y-4">
                    <input type="text" placeholder="Question Text" value={newQuestion.text} onChange={e => setNewQuestion({...newQuestion, text: e.target.value})} className="w-full border-2 border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <select value={newQuestion.type} onChange={e => setNewQuestion({...newQuestion, type: e.target.value})} className="w-full border-2 border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="radio">Radio (Single Choice)</option>
                        <option value="checkbox">Checkbox (Multiple Choice)</option>
                        <option value="dropdown">Dropdown (Single Choice)</option> 
                    </select>
                    <textarea placeholder="Options (comma-separated, e.g., Yes,No)" value={newQuestion.options} onChange={e => setNewQuestion({...newQuestion, options: e.target.value})} className="w-full border-2 border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <button type="submit" className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors">Add Question</button>
                </form>
            </div>

            {/* Manage Questions Card */}
            {/* Manage Questions Card (Updated) */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-700 mb-6">Manage Questions ({questions.length})</h2>
                <div className="space-y-3">
                    {questions.map((q) => (
                        <QuestionItem 
                            key={q._id} 
                            question={q} 
                            onDelete={handleDelete} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;