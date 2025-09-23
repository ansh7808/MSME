import React, { useState } from 'react';

const SchemeCard = ({ scheme }) => {
    // Har card ka apna expand/collapse state
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border border-slate-200 rounded-lg bg-slate-50 transition-all duration-300">
            {/* --- Collapsed View --- */}
            <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={toggleExpand}
            >
                <p className="font-bold text-slate-800">{scheme.schemeName}</p>
                <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-semibold text-sm">Know More</span>
                    <svg 
                        className={`w-5 h-5 text-blue-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            {/* --- Expanded View (Conditional) --- */}
            {isExpanded && (
                <div className="p-4 border-t border-slate-200 bg-white">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-600">Description</h4>
                            <p className="text-slate-800">{scheme.description}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-600">Nature of Assistance</h4>
                            <p className="text-slate-800">{scheme.natureOfAssistance}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-600">Who can Apply?</h4>
                            <p className="text-slate-800">{scheme.whocanApply}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-600">How to Apply?</h4>
                            <p className="text-slate-800">{scheme.howtoApply}</p>
                        </div>
                    </div>

                    <div className="mt-6 text-right">
                         <a 
                            href={scheme.applicationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white font-bold text-sm py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SchemeCard;