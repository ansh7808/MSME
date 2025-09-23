import React, { useState } from 'react';

// Yeh component props lega:
// question: poora question object
// onDelete: delete function (sirf admin dashboard mein use hoga)
// showDeleteButton: decide karega ki delete button dikhana hai ya nahi
const QuestionItem = ({ question, onDelete, showDeleteButton = true }) => {
    const [isOpen, setIsOpen] = useState(false); // Har question ka apna open/close state

    return (
        <div className="bg-slate-50 rounded-lg border border-slate-200">
            {/* Question Text (Clickable Area) */}
            <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="flex-1 mr-4 font-semibold text-slate-800">{question.text}</p>
                <div className="flex items-center gap-4">
                    <span className="text-xs bg-slate-200 text-slate-600 p-1 px-2 rounded-md font-medium">{question.type}</span>
                    {/* Arrow Icon jo open/close par rotate hoga */}
                    <svg 
                        className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            {/* Options (Conditional Rendering) */}
            {isOpen && (
                <div className="p-4 border-t border-slate-200">
                    <h4 className="font-bold text-slate-600 mb-2">Options:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                        {question.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                    {/* Delete button sirf tab dikhega jab zaroorat ho */}
                    {showDeleteButton && (
                         <button 
                            onClick={(e) => {
                                e.stopPropagation(); // Taaki question collapse na ho
                                onDelete(question._id);
                            }}
                            className="bg-red-100 text-red-600 mt-4 px-3 py-1 rounded-lg hover:bg-red-200 text-xs font-bold transition-colors"
                        >
                            DELETE QUESTION
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestionItem;