import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// --- Helper Components & Icons ---
const SendIcon = () => ( <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"></path></svg> );
const BotIcon = ({ className = "h-8 w-8 text-blue-600" }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M12 18v2" /><path d="M12 14v-2" /></svg> );
const CloseIcon = ({ className = "h-6 w-6 text-gray-500" }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> );
const TypingIndicator = () => ( <div className="flex items-center space-x-1.5"><div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.3s]"></div><div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.15s]"></div><div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div></div> );

// --- Main Chatbot Component ---
const CustomChatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Namaste! Main MSMESaathi hoon. Aap MSME schemes, Udyam registration, ya business loans ke baare mein kuch bhi pooch sakte hain." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleSendMessage = async (userMessage) => {
        if (!userMessage.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
                message: userMessage,
            });
            setMessages(prev => [...prev, { sender: 'bot', text: response.data.reply }]);
        } catch (error) {
            console.error("Chatbot API fetch error:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(inputValue);
        setInputValue('');
    };

    return (
        <div className="flex h-[70vh] w-96 flex-col rounded-xl border border-gray-300 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-xl border-b border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center space-x-3">
                    <div className="relative"><BotIcon /><span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span></div>
                    <div>
                        <h1 className="text-md font-bold text-gray-800">MSMESaathi Assistant</h1>
                        <p className="text-xs text-gray-500">Typically replies instantly</p>
                    </div>
                </div>
                <button onClick={onClose} className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"><CloseIcon /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'bot' && <BotIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />}
                        <div className={`max-w-xs rounded-xl px-3 py-2 lg:max-w-sm ${msg.sender === 'user' ? 'rounded-br-none bg-blue-600 text-white' : 'rounded-bl-none bg-gray-100 text-gray-800'}`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <BotIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                        <div className="rounded-xl rounded-bl-none bg-gray-100 px-4 py-3"><TypingIndicator /></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 bg-white p-3 rounded-b-xl">
                <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask a question..." className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300" disabled={isLoading} />
                    <button type="submit" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400" disabled={isLoading || !inputValue.trim()}><SendIcon /></button>
                </form>
            </div>
        </div>
    );
};

export default CustomChatbot;