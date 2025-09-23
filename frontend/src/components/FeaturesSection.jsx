// import React from 'react';

// const FeatureCard = ({ icon, title, description }) => (
//   <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//     <div className="text-blue-600 mb-4">{icon}</div>
//     <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
//       title: 'AI-Powered Chatbot Support',
//       description: 'Get instant answers to your MSME-related questions, 24/7, in your preferred language.',
//     },
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
//       title: 'Resource Library',
//       description: 'Access simplified scheme guidebooks, FAQs, and video explainers to help you at every step.',
//     },
//   ];

//   return (
//     <section id="features" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Powerful Tools for Your Growth</h2>
//           <p className="text-gray-600 mt-2">Everything you need, all in one place.</p>
//         </div>
//         {/* max-w-4xl mx-auto centers the 2 cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from 'react';
import { Link } from 'react-router-dom'; // Link ko import karein

// FeatureCard ko ab 'action' naam ka ek naya prop accept karna hai
const FeatureCard = ({ icon, title, description, action }) => {
 

  return (
    <div 
      onClick={action}
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${action ? 'cursor-pointer' : ''}`}
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


const FeaturesSection = ({ openChat }) => {
  // Yeh check karega ki 'openChat' prop HomePage se FeaturesSection tak pahuncha ya nahi
  
  const features = [
    {
      icon:  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      title: 'AI-Powered Chatbot Support',
      description: 'Get instant answers to your MSME-related questions, 24/7, in your preferred language.',
      action: openChat,
      path: null,
    },
    {
      icon:  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: 'Resource Library',
      description: 'Access simplified scheme guidebooks, FAQs, and video explainers to help you at every step.',
      action: null,
      path: '/resources', 
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Powerful Tools for Your Growth</h2>
          <p className="text-gray-600 mt-2">Everything you need, all in one place.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))} */}
          {features.map((feature, index) => (
            // Agar path hai toh Link component ka use karein, nahi toh simple div
            feature.path ? (
              <Link to={feature.path} key={index}>
                <FeatureCard {...feature} />
              </Link>
            ) : (
              <FeatureCard key={index} {...feature} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
