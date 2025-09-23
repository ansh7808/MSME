// import React from 'react';

// const ResultsModal = ({ closeModal, schemes, isLoading }) => {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
//             <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">Matching Schemes Found</h2>
//                     <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
//                 </div>
                
//                 {isLoading ? (
//                     <div className="text-center p-10">
//                         <p className="font-semibold text-lg animate-pulse">Finding the best schemes for you...</p>
//                     </div>
//                 ) : (
//                     <div>
//                         {schemes && schemes.length > 0 ? (
//                             <div className="space-y-4">
//                                 {schemes.map((scheme, index) => (
//                                     <div key={index} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
//                                         <p className="font-semibold text-gray-700">{scheme.schemeName}</p>
//                                         <a 
//                                             href={scheme.applicationLink} 
//                                             target="_blank" 
//                                             rel="noopener noreferrer"
//                                             className="bg-blue-600 text-white font-bold text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//                                         >
//                                             Apply Now
//                                         </a>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <div className="text-center p-10">
//                                 <p className="font-semibold text-lg text-gray-600">Sorry, no matching schemes were found based on your selections.</p>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ResultsModal;


import React from 'react';
import SchemeCard from './SchemeCard'; // Naya component import karein

const ResultsModal = ({ closeModal, schemes, isLoading }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Matching Schemes Found</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                
                {isLoading ? (
                    <div className="text-center p-10">
                        <p className="font-semibold text-lg animate-pulse">Finding the best schemes for you...</p>
                    </div>
                ) : (
                    <div>
                        {schemes && schemes.length > 0 ? (
                            <div className="space-y-4">
                                {schemes.map((scheme, index) => (
                                    <SchemeCard key={index} scheme={scheme} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-10">
                                <p className="font-semibold text-lg text-gray-600">Sorry, no matching schemes were found based on your selections.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResultsModal;