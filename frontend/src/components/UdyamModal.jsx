import React from 'react';

const UdyamModal = ({ closeModal }) => {
    const steps = [
     "Go to the official portal link given below.",
    "Choose type of registration (New Entrepreneurs / Already registered under UAM).",
    "Enter Aadhaar number of the proprietor/authorized signatory and verify with OTP.",
    "Provide PAN details (mandatory) – details will be auto-fetched from IT database.",
    "Fill business details: enterprise name, type of organization, address, and bank details.",
    "Select industry & activities (Manufacturing / Services / Trading) using NIC codes.",
    "Provide investment & turnover details as per MSME classification.",
    "Enter employment details (number of employees).",
    "Fill in other details (category, gender, specially abled, etc. if applicable).",
    "Submit form with Aadhaar OTP verification.",
    "Download Udyam Registration Certificate (with unique URN & QR Code)."
        // "Visit the official Udyam Registration portal.",
        // "Enter your Aadhaar Number and Name as per Aadhaar.",
        // "Validate & Generate OTP. Enter the OTP received on your mobile.",
        // "Fill in the PAN details for validation.",
        // "Complete the form with your business details (address, bank info, etc.).",
        // "Submit the form to get your Udyam Registration Number instantly.",
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">How to get your Udyam Registration</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg mb-6">
                    <p><strong>Good to know:</strong> Udyam Registration is a free, paperless process. All you need is your Aadhaar number.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-700">Follow these simple steps:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                        {steps.map((step, index) => <li key={index}>{step}</li>)}
                    </ol>
                </div>
                
                <div className="mt-8 text-center">
                    <a 
                        href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition"
                    >
                        Go to Official Portal
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UdyamModal;