import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  HelpCircle, 
  RotateCcw, 
  Copy, 
  Check, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { StudentProfile } from '../types';
import { sendChatMessage } from '../services/apiService';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AICounselorChatProps {
  initialPrompt?: string;
  studentContext?: Partial<StudentProfile>;
}

export const AICounselorChat: React.FC<AICounselorChatProps> = ({
  initialPrompt,
  studentContext,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "👋 Mwaiseni! I am C.A.R.R.A, your personal Zambian Career & Research Assistant. Whether you need guidance on ECZ subject combinations, UNZA/CBU cutoffs, TEVETA trades, or HELSB/CDF bursaries, I'm here to help. What's on your mind today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      sendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const quickPrompts = [
    "How do I calculate my ECZ best 6 points for UNZA?",
    "What subjects do I need for CBU Mining Engineering?",
    "How does the Constituency Development Fund (CDF) bursary work?",
    "Can I become a Clinical Officer with 5 credits?",
    "High-demand careers in Zambia that don't require university",
    "What is the difference between a TEVETA diploma and a degree?"
  ];

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const reply = await sendChatMessage(
        [...messages, userMsg],
        studentContext
      );

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: reply || "I am here to guide your career journey in Zambia. What question can I answer for you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: "In Zambia, university entry typically requires at least 5 Credits including English and Mathematics. You can also explore TEVETA colleges like Evelyn Hone or NORTEC. What specific program would you like to explore?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Chat refreshed. How can C.A.R.R.A assist your educational or career journey in Zambia?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="space-y-4 pb-12 max-w-4xl mx-auto">
      
      {/* Header bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            <Bot className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Ask C.A.R.R.A AI Advisor</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Grounded in the Examinations Council of Zambia (ECZ), HELSB loans, and local labor realities.
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer text-xs flex items-center gap-1 font-semibold"
          title="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Suggested prompts quick chips */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Recommended Zambian Career Prompts</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(prompt)}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 hover:text-emerald-800 text-slate-700 whitespace-nowrap transition-colors cursor-pointer font-medium shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Feed */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs h-[520px] flex flex-col overflow-hidden">
        
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  isUser ? 'bg-slate-800 text-white' : 'bg-emerald-700 text-amber-300'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className="space-y-1">
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-slate-900 text-white rounded-tr-none'
                        : 'bg-slate-50 text-slate-800 border border-slate-200/80 rounded-tl-none font-medium'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>

                  <div className={`flex items-center gap-2 text-[10px] text-slate-400 ${isUser ? 'justify-end' : ''}`}>
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-slate-700 cursor-pointer flex items-center gap-0.5"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 rounded-tl-none flex items-center gap-2 text-xs text-slate-500">
                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
                <span className="font-medium text-emerald-800">C.A.R.R.A is analyzing Zambian career pathways...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Message Input Box */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about ECZ subjects, UNZA cutoffs, TEVETA, HELSB loan deadlines..."
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className="p-2.5 sm:px-4 sm:py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Send</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
