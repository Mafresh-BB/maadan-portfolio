import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Bot, Loader2, Send } from 'lucide-react';
import { generateGeminiResponse } from '../utils/gemini';
import type { ChatMessage } from '../types';

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Abdulyekeen's AI assistant. I can guide you through his projects, skills, and experience. What would you like to know? ✨" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const aiResponse = await generateGeminiResponse(messages, userText);

    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-linear-to-r from-indigo-600 via-blue-600 to-blue-500 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                <Sparkles size={18} className="text-yellow-300" />
              </div>
              <div>
                <span className="font-bold block text-sm">Ask AI Assistant</span>
                <span className="text-xs text-blue-100 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50/50 dark:bg-gray-800/50 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                 {msg.role === 'model' && (
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white mr-2 mt-1 shrink-0 shadow-sm">
                       <Bot size={12} />
                    </div>
                 )}
                <div 
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white mr-2 mt-1 shrink-0">
                   <Bot size={12} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Loader2 size={14} className="animate-spin text-blue-500" />
                  <span className="text-xs font-medium">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about my projects..."
              className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all text-gray-800 dark:text-white"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button & Tooltip */}
      <div className="relative group">
        {!isOpen && (
           <div className="absolute bottom-full right-0 mb-4 bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 w-48 animate-bounce origin-bottom-right hidden md:block">
              <p>Get guided info about my projects & skills! 👇</p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-b border-r border-gray-100 dark:border-gray-700"></div>
           </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? 'bg-gray-800 dark:bg-gray-700 rotate-90' : 'bg-linear-to-r from-indigo-600 to-blue-600 hover:scale-110'} text-white p-4 rounded-full shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center z-50`}
        >
          {isOpen ? <X size={24} /> : <Sparkles size={24} className="animate-pulse" />}
        </button>
      </div>
    </div>
  );
};