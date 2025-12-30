"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

interface Lead {
  part?: string;
  make?: string;
  model?: string;
  year?: string;
  email?: string;
  phone?: string;
  sessionId?: string;  // ✅ NEW: Session tracking
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lead, setLead] = useState<Lead>({});
  const [leadSaved, setLeadSaved] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBot("👋 Hi! Welcome to PartsCentral.");
      addBot("🚗 What auto part are you looking for today?");
    }
  }, [isOpen]);

  const addBot = (text: string) =>
    setMessages((p) => [...p, { id: crypto.randomUUID(), type: "bot", text }]);

  const addUser = (text: string) =>
    setMessages((p) => [...p, { id: crypto.randomUUID(), type: "user", text }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue("");
    addUser(userText);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.type === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: userText },
          ],
          sessionId: lead.sessionId,  // ✅ NEW: Pass session ID
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("API error:", data);
        addBot("⚠️ Something went wrong. Please try again.");
      } else {
        addBot(data.reply);

        // ✅ NEW: Handle session ID and lead updates
        if (data.sessionId) {
          setLead((prev) => ({ ...prev, sessionId: data.sessionId }));
        }

        if (data.leadUpdate) {
          setLead((prev) => ({ 
            ...prev, 
            ...data.leadUpdate,
            sessionId: data.sessionId || prev.sessionId 
          }));
        }

        // ✅ NEW: Show save confirmation
        if (data.saved) {
          setLeadSaved(true);
          console.log("✅ Lead saved/updated:", {
            sessionId: data.sessionId || lead.sessionId,
            ...lead,
            ...data.leadUpdate
          });
          setTimeout(() => setLeadSaved(false), 3000);
        }
      }
    } catch (err) {
      console.error("Request error:", err);
      addBot("⚠️ Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          right-4 sm:right-6
          bottom-4 sm:bottom-6
          z-50
          flex items-center gap-2
          bg-gradient-to-br from-[#00A3FF] to-[#003D80]
          text-white
          px-4 py-3
          rounded-full
          shadow-[0_0_25px_rgba(0,163,255,0.8)]
          transition-all duration-300
          hover:scale-110
          group
          animate-pulse
        "
        aria-label="Chat with us"
      >
        <MessageCircle className="w-7.5 h-7.5" />
        <span
          className="
            hidden sm:block
            max-w-0 overflow-hidden
            group-hover:max-w-xs
            transition-all duration-300
            whitespace-nowrap
            font-semibold text-sm
          "
        >
          Chat Now
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-white rounded-2xl shadow-[0_40px_120px_rgba(0,163,255,0.4)] border border-[#00A3FF]/30 flex flex-col max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-500 backdrop-blur-xl">
      {/* Header */}
      <div className="p-6 border-b border-[#00A3FF]/30 bg-[#00A3FF]/5 backdrop-blur-sm flex justify-between items-center shadow-[0_4px_20px_rgba(0,163,255,0.1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#00A3FF] to-[#0080D0] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.6)]">
            <MessageCircle size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#E8F3FF] to-[#B3D9FF] bg-clip-text text-transparent">
              PartsCentral Bot
            </h3>
            <p className="text-xs text-[#8CBFFF] font-medium">Live chat support</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-[#00A3FF]/20 rounded-xl transition-all duration-200 hover:scale-110 text-[#8CBFFF] hover:text-white"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#00A3FF]/50 scrollbar-track-[#091B33] pr-2">
        {messages.map((m, index) => (
          <div
            key={m.id}
            className={`flex animate-in slide-in-from-${m.type === "user" ? "right" : "left"} fade-in duration-300 delay-${index * 50} ${
              m.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] px-5 py-3 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
                m.type === "user"
                  ? "bg-gradient-to-r from-[#E8F3FF] to-[#B3D9FF] text-[#001D3D] font-semibold rounded-br-sm shadow-[0_8px_25px_rgba(0,163,255,0.3)]"
                  : "bg-[#091B33]/80 backdrop-blur-xl border border-[#00A3FF]/20 rounded-bl-sm shadow-[0_8px_25px_rgba(0,163,255,0.1)]"
              }`}
            >
              <p className="text-sm leading-relaxed break-words">{m.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-[#091B33]/80 backdrop-blur-xl border border-[#00A3FF]/20 px-5 py-3 rounded-2xl rounded-bl-sm shadow-[0_8px_25px_rgba(0,163,255,0.1)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#00A3FF] to-[#0080D0] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gradient-to-r from-[#00A3FF] to-[#0080D0] rounded-full animate-bounce [animation-delay:0.1s]" />
                <div className="w-2 h-2 bg-gradient-to-r from-[#00A3FF] to-[#0080D0] rounded-full animate-bounce [animation-delay:0.2s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      
       
      {/* ✅ NEW: Collected Lead Info */}
      {Object.keys(lead).filter(k => k !== 'sessionId').length > 0 && (
        <div className="p-4 pt-3 border-t border-[#00A3FF]/20 text-xs text-[#8CBFFF] bg-[#00A3FF]/5">
          <p className="font-semibold mb-2 text-[10px]">📋 Collected Info:</p>
          {lead.part && <p className="text-[11px]">🔧 Part: {lead.part}</p>}
          {lead.year && <p className="text-[11px]">📅 Year: {lead.year}</p>}
          {lead.make && <p className="text-[11px]">🚘 Make: {lead.make}</p>}
          {lead.model && <p className="text-[11px]">🚙 Model: {lead.model}</p>}
          {lead.email && <p className="text-[11px]">📧 {lead.email}</p>}
          {lead.phone && <p className="text-[11px]">📱 {lead.phone}</p>}
          {lead.sessionId && (
            <p className="text-[10px] mt-1 opacity-75">
              ID: {lead.sessionId.slice(0, 8)}...
            </p>
          )}
        </div>
      )}

      {/* Input Area */}
      <div className="p-6 pt-4 border-t border-[#00A3FF]/20 bg-gradient-to-t from-[#001D3D] to-transparent backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about any auto part..."
            disabled={isLoading}
            className="flex-1 h-14 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-sm font-medium border-2 border-[#00A3FF]/30 focus:border-[#00A3FF] focus:outline-none focus:ring-4 focus:ring-[#00A3FF]/30 transition-all duration-300 placeholder-gray-500 shadow-inner"
          />
          <button
            disabled={isLoading || !inputValue.trim()}
            type="submit"
            className="w-14 h-14 bg-gradient-to-r from-[#00A3FF] via-[#0080D0] to-[#001D3D] hover:from-[#E8F3FF] hover:to-[#B3D9FF] hover:shadow-[0_0_30px_rgba(0,163,255,0.8)] text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-[0_10px_30px_rgba(0,163,255,0.5)] border border-[#00A3FF]/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 hover:disabled:scale-100"
            aria-label="Send message"
          >
            <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
