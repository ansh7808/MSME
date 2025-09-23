import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icons for visual appeal
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
const OfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;

const ContactPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <main className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-12">
                    Helpline & Support
                </h1>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: MSME Helpline Numbers */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><PhoneIcon /> MSME Helplines</h2>
                        <p className="text-slate-600 mb-4">For general queries and support, you can contact the Champions Control Room.</p>
                        <ul className="space-y-2 text-slate-800 font-medium">
                            <li><strong>Toll-Free:</strong> 1800-11-6763</li>
                            <li><strong>Phone:</strong> 011-23061541</li>
                            <li><strong>Email:</strong> champions@gov.in</li>
                        </ul>
                    </div>

                    {/* Card 2: Grievance Redressal */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><LinkIcon /> Grievance Redressal</h2>
                        <p className="text-slate-600 mb-4">If you have any complaints, especially regarding delayed payments, use the MSME Samadhaan Portal.</p>
                        <a 
                            href="https://samadhaan.msme.gov.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Visit Samadhaan Portal
                        </a>
                    </div>

                    {/* Card 3: DIC & MSME-DFO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><OfficeIcon /> District & State Offices</h2>
                        <p className="text-slate-600 mb-4">For local support, contact your nearest District Industries Centre (DIC) or MSME Development and Facilitation Office (MSME-DFO).</p>
                        <a 
                            href="https://www.dcmsme.gov.in/All_MSME_DIs_TCs.aspx" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Find State Directorates
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;