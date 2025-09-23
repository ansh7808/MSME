// import React, { useState } from 'react'; // useState import karein
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import FeaturesSection from '../components/FeaturesSection';
// import Footer from '../components/Footer';
// import QuestionnaireModal from '../components/QuestionnaireModal'; // Naya Modal import karein

// const HomePage = () => {
//   // Modal ko open/close karne ke liye state
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <main>
//         {/* Modal open karne wala function prop ke through pass karein */}
//         <HeroSection openModal={() => setIsModalOpen(true)} />
//         <FeaturesSection />
//       </main>
//       <Footer />
      
//       {/* Agar isModalOpen true hai, toh Modal dikhayein */}
//       {isModalOpen && (
//         <QuestionnaireModal closeModal={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import QuestionnaireModal from '../components/QuestionnaireModal';
import ResultsModal from '../components/ResultsModal'; // Naya Results Modal import karein

// import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
// import config from '../chatbot/config.js';
// import MessageParser from '../chatbot/MessageParser.jsx';
// import ActionProvider from '../chatbot/ActionProvider.jsx';
import CustomChatbot from '../components/CustomChatbot';

const HomePage = () => {
  const [isQuestionnaireModalOpen, setQuestionnaireModalOpen] = useState(false);
  const [isResultsModalOpen, setResultsModalOpen] = useState(false); // Results modal ke liye state
  const [schemes, setSchemes] = useState([]); // Schemes ko store karne ke liye state
  const [isLoading, setIsLoading] = useState(false); // Loading state

   const [isChatOpen, setChatOpen] = useState(false);

  // Yeh function QuestionnaireModal se data lega aur API call karega
  const handleFormSubmit = async (payload) => {
    setIsLoading(true);
    setResultsModalOpen(true); // Results modal turant khol do taaki loading dikhe
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/eligibility`, payload);
        setSchemes(res.data.schemes);
        toast.success(`${res.data.schemes.length} matching schemes found!`);
    } catch (error) {
        console.error("Error fetching schemes:", error);
        toast.error("Could not find schemes. Please try again.");
        setResultsModalOpen(false); // Agar error aaye toh results modal band kar do
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <HeroSection openModal={() => setQuestionnaireModalOpen(true)} />
        <FeaturesSection openChat={() => setChatOpen(true)} />
      </main>
      <Footer />
      
      {isQuestionnaireModalOpen && (
        <QuestionnaireModal 
            closeModal={() => setQuestionnaireModalOpen(false)}
            onFormSubmit={handleFormSubmit}
        />
      )}

      {isResultsModalOpen && (
          <ResultsModal 
            closeModal={() => setResultsModalOpen(false)}
            schemes={schemes}
            isLoading={isLoading}
          />
      )}
       {/* --- Chatbot Section (Updated) --- */}
      {/* Hum chatbot ko page ke content ke upar dikhayenge */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
          isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}>
         <CustomChatbot onClose={() => setChatOpen(false)} />
      </div>

    </div>
  );
};

export default HomePage;
