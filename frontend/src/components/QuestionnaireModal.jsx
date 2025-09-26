// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// // onFormSubmit ek naya prop hai jo HomePage se aayega
// const QuestionnaireModal = ({ closeModal, onFormSubmit }) => {
//     const [questions, setQuestions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({});

//     useEffect(() => {
//         const fetchQuestions = async () => {
//             try {
//                 const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/questions`);
//                 const fetchedQuestions = res.data.questions;
//                 setQuestions(fetchedQuestions);
                
//                 const initialFormData = {};
//                 fetchedQuestions.forEach(q => {
//                     initialFormData[q._id] = q.type === 'checkbox' ? [] : '';
//                 });
//                 setFormData(initialFormData);
//             } catch (err) {
//                 toast.error("Could not load questions.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchQuestions();
//     }, []);

//     const handleChange = (e, questionId, questionType) => {
//         const { value, checked } = e.target;
//         setFormData(prevData => {
//             if (questionType === 'checkbox') {
//                 const currentOptions = prevData[questionId] || [];
//                 if (checked) return { ...prevData, [questionId]: [...currentOptions, value] };
//                 return { ...prevData, [questionId]: currentOptions.filter(item => item !== value) };
//             }
//             return { ...prevData, [questionId]: value };
//         });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // **Data Transformation: React State ko Backend ke Format mein Convert Karna**
//         // Yeh part bahut zaroori hai
//         const payload = {};
//         questions.forEach((q, index) => {
//             const questionKey = [
//                 'businessType', 'enterpriseSize', 'udyamRequired', 'location', 
//                 'supportType', 'employeesRange', 'turnoverRange', 'sectorSpecific'
//             ][index];
            
//             let answer = formData[q._id];
            
//             // Backend "Yes"/"No" ko boolean expect kar sakta hai
//             if (questionKey === 'udyamRequired' || questionKey === 'sectorSpecific') {
//                 answer = (answer === 'Yes');
//             }
//             // enterpriseSize se extra text hatao
//             if (questionKey === 'enterpriseSize') {
//                 answer = answer.split(' ')[0];
//             }

//             payload[questionKey] = answer;
//         });

//         console.log("Sending this payload to backend:", payload);
//         onFormSubmit(payload); // Data ko HomePage par bhejo
//         closeModal(); // Is modal ko band kar do
//     };


//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
//             <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">MSME Eligibility Checker</h2>
//                     <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
//                 </div>
                
//                 {loading ? (
//                     <div className="text-center p-10">
//                         <p className="font-semibold text-lg">Loading Questions...</p>
//                     </div>
//                 ) : (
//                     <form onSubmit={handleSubmit}>
//                         {questions.map((q, index) => (
//                              <div key={q._id} className="mb-6">
//                                 <p className="font-semibold text-gray-700 mb-2">{`Q${index + 1}. ${q.text}`}</p>
//                                 <div className="space-y-2">
//                                     {q.options.map(opt => (
//                                         <label key={opt} className="flex items-center text-gray-600">
//                                             <input 
//                                                 type={q.type} 
//                                                 name={q._id} // name ab question ki ID hai
//                                                 value={opt} 
//                                                 onChange={(e) => handleChange(e, q._id, q.type)}
//                                                 className="mr-3"
//                                             />
//                                             {opt}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                         <div className="flex justify-end mt-8">
//                             <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
//                                 Submit & Find Schemes
//                             </button>
//                         </div>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default QuestionnaireModal;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const QuestionnaireModal = ({ closeModal, onFormSubmit }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/questions`);
                const fetchedQuestions = res.data.questions;
                setQuestions(fetchedQuestions);
                const initialFormData = {};
                fetchedQuestions.forEach(q => {
                    initialFormData[q._id] = q.type === 'checkbox' ? [] : '';
                });
                setFormData(initialFormData);
            } catch (err) {
                toast.error("Could not load questions.");
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const handleChange = (e, questionId, questionType) => {
        const { value, checked } = e.target;
        setFormData(prevData => {
            if (questionType === 'checkbox') {
                const currentOptions = prevData[questionId] || [];
                if (checked) return { ...prevData, [questionId]: [...currentOptions, value] };
                return { ...prevData, [questionId]: currentOptions.filter(item => item !== value) };
            }
            return { ...prevData, [questionId]: value };
        });
    };
    
    // ==========================================================
    // === YAHAN PAR FINAL SIMPLIFIED LOGIC HAI ===
    // ==========================================================
    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     const payload = {};
        
    //     questions.forEach((q, index) => {
    //         const answer = formData[q._id];
            
    //         const questionKey = [
    //             'businessType', 'enterpriseSize', 'udyamRequired', 'location', 
    //             'supportType', 'employeesRange', 'turnoverRange', 'sectorSpecific'
    //         ][index];
            
    //         let finalAnswer = answer;
    //         // === YAHAN PAR CHANGE KIYA GAYA HAI ===
    //         if (questionKey === 'enterpriseSize' && answer) {
    //             // "Micro (Investment...)" se sirf "Micro" nikaalo
    //             finalAnswer = answer.split(' ')[0];
    //         } 
    //         else if (questionKey === 'udyamRequired' || questionKey === 'sectorSpecific') {
    //             finalAnswer = (answer === 'Yes');
    //         }
    //         // // Sirf "Yes/No" ko true/false mein convert karna zaroori hai
    //         // // kyunki database mein iska type Boolean hai.
    //         // if (questionKey === 'udyamRequired' || questionKey === 'sectorSpecific') {
    //         //     finalAnswer = (answer === 'Yes');
    //         // }
            
    //         payload[questionKey] = finalAnswer;
    //     });

    // ==========================================================
    // === YAHAN PAR NAYE QUESTIONS KE HISAAB SE UPDATE KIYA HAI ===
    // ==========================================================
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const payload = {};
        
        // Naye 7 questions ke hisaab se backend keys
        const questionKeys = [
            'businessType', 'enterpriseSize', 'location', 
            'supportType', 'employeesRange', 'turnoverRange', 'states'
        ];

        questions.forEach((q, index) => {
            const answer = formData[q._id];
            
            // questionKeys array se key nikalo
            const key = questionKeys[index];
            
            let finalAnswer = answer;

            // Enterprise Size se extra text hatao
            if (key === 'enterpriseSize' && answer) {
                finalAnswer = answer.split(' ')[0];
            }
            
            payload[key] = finalAnswer;
        });


      

       //alert("Yeh data backend ko bheja jaa raha hai (Console bhi check karein):\n\n" + JSON.stringify(payload, null, 2));

        console.log("Sending RAW payload to backend:", payload);
        onFormSubmit(payload);
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
             <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">MSME Eligibility Checker</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                
                {loading ? (
                    <div className="text-center p-10">
                        <p className="font-semibold text-lg">Loading Questions...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {questions.map((q, index) => (
                             <div key={q._id} className="mb-6">
                                <p className="font-semibold text-gray-700 mb-2">{`Q${index + 1}. ${q.text}`}</p>
                                <div className="space-y-2">
                                             {/* === YAHAN PAR LOGIC ADD KI GAYI HAI === */}

                                    {/* Agar type 'radio' hai */}
                                    {q.type === 'radio' && q.options.map(opt => (
                                        <label key={opt} className="flex items-center text-gray-600">
                                            <input type="radio" name={q._id} value={opt} onChange={(e) => handleChange(e, q._id, q.type)} className="mr-3" required={!formData[q._id]} />
                                            {opt}
                                        </label>
                                    ))}

                                    {/* Agar type 'checkbox' hai */}
                                    {q.type === 'checkbox' && q.options.map(opt => (
                                        <label key={opt} className="flex items-center text-gray-600">
                                            <input type="checkbox" name={q._id} value={opt} onChange={(e) => handleChange(e, q._id, q.type)} className="mr-3" />
                                            {opt}
                                        </label>
                                    ))}

                                    {/* Agar type 'dropdown' hai */}
                                    {q.type === 'dropdown' && (
                                        <select 
                                            name={q._id} 
                                            onChange={(e) => handleChange(e, q._id, q.type)} 
                                            className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                            required={!formData[q._id]}
                                            value={formData[q._id] || ''}
                                        >
                                            <option value="" disabled>-- Select an option --</option>
                                            {q.options.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    )}

                            
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-end mt-8">
                            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                Submit & Find Schemes
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuestionnaireModal;