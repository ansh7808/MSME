import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icons for each section
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const FaqIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;

const ResourcePage = () => {
    const resources = {
        guidebooks: [
            { title: "Udyam Registration Full Guide (PDF)", url: "https://udyamregistration.gov.in/docs/Udyam-Registration-Booklet.pdf" },
            { title: "MSME Champions Portal Guide", url: "https://champions.gov.in/Government-India/Ministry-MSME-Portal-handholding/msme-problem-complaint-welcome.htm" },
            { title: "Schemes of Ministry of MSME (PDF)", url: "https://msme.gov.in/sites/default/files/Scheme-booklet-Eng.pdf" },
        ],
        faqs: [
            { title: "Udyam Registration FAQs", url: "https://udyamregistration.co/udyam-msme-registration-online-faq.php" },
            { title: "MSME Samadhaan (Delayed Payment) FAQs", url: "https://samadhaan.msme.gov.in/MyMsme/MSEFC/FAQ.aspx" },
            { title: "MSME General FAQs", url: "https://www.gjepc.org/pdf/MSME/FAQ.pdf" },
        ],
        videos: [
            { title: "Official MSME YouTube Channel", url: "https://www.youtube.com/channel/UCI7eKvD3NJt38Bu7hdhIruQ" },
            { title: "How to Register on Udyam Portal (Video)", url: "https://youtu.be/WLULIx-RUZI" },
            { title: "GeM Portal for Sellers (Video Playlist)", url: "https://youtu.be/LdhQjxwSwKw" },
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <main className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-12">
                    Resource Library
                </h1>
                
                <div className="space-y-12 max-w-4xl mx-auto">
                    {/* Guidebooks Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><BookIcon /> Scheme Guidebooks</h2>
                        <ul className="space-y-3 list-disc list-inside">
                            {resources.guidebooks.map((item, index) => (
                                <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.title}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQs Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><FaqIcon /> Frequently Asked Questions (FAQs)</h2>
                         <ul className="space-y-3 list-disc list-inside">
                            {resources.faqs.map((item, index) => (
                                <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.title}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Videos Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4 flex items-center"><VideoIcon /> Video Explainers</h2>
                         <ul className="space-y-3 list-disc list-inside">
                            {resources.videos.map((item, index) => (
                                <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResourcePage;