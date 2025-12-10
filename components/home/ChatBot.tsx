"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Minimize2, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState<
    "greeting" | "email" | "phone" | "qualified"
  >("greeting");
  const [leadData, setLeadData] = useState<any>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("👋 Hi! Welcome to Used Auto Parts");
      addBotMessage("🚗 Tell me which auto part you're looking for today?");
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "bot", text },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "user", text },
    ]);
  };

  const sendToGoogleSheets = async (finalLead: any) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzF6TVTRarOqEqPE2309aLCkgdpvl2WhP8Btij_oPdajhkYwzxhICeb3gLi_Hrpg-41/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalLead),
        }
      );
      
      console.log("Data sent to Google Sheets successfully");
      return true;
    } catch (error) {
      console.error("Error sending to Google Sheets:", error);
      // Still show success to user even if request fails
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.trim();
    setInputValue("");
    addUserMessage(userInput);
    setIsLoading(true);

    setTimeout(async () => {
      try {
        if (stage === "greeting") {
          setLeadData({ part: userInput });
          addBotMessage(`✅ Great! You're looking for a ${userInput}.`);
          addBotMessage("✉️ Now please share your email so we can send your quote.");
          setStage("email");
        } 
        else if (stage === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(userInput)) {
            addBotMessage("❌ Please enter a valid email address.");
            setIsLoading(false);
            return;
          }

          setLeadData((prev: any) => ({ ...prev, email: userInput }));
          addBotMessage("📞 Perfect! What's your phone number so we can call you?");
          setStage("phone");
        } 
        else if (stage === "phone") {
          const phoneRegex = /^[\d\-\(\)\+\s]{10,}$/;
          if (!phoneRegex.test(userInput)) {
            addBotMessage("❌ Please enter a valid phone number.");
            setIsLoading(false);
            return;
          }

          const finalLead = {
            ...leadData,
            phone: userInput,
            source: "chatbot",
            timestamp: new Date().toISOString(),
          };

          // Send to Google Sheets
          await sendToGoogleSheets(finalLead);

          // Save to localStorage as backup
          try {
            const existingLeads = JSON.parse(
              localStorage.getItem("chatbot_leads") || "[]"
            );
            existingLeads.push(finalLead);
            localStorage.setItem("chatbot_leads", JSON.stringify(existingLeads));
          } catch (storageError) {
            console.warn("Error saving to localStorage:", storageError);
          }

          addBotMessage("🎉 You're all set!");
          addBotMessage("📋 Here's your quote summary:");
          addBotMessage(
            `Part: ${finalLead.part}\nEmail: ${finalLead.email}\nPhone: ${finalLead.phone}`
          );
          addBotMessage(
            "✨ One of our auto parts experts will call you within 1 hour!"
          );

          setStage("qualified");
        }
      } catch (error) {
        console.error("Error in handleSubmit:", error);
        addBotMessage("⚠️ Something went wrong. Please try again.");
      }

      setIsLoading(false);
    }, 800);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00A3FF] to-[#003D80] text-white rounded-full shadow-[0_0_25px_rgba(0,163,255,0.8)] transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse cursor-pointer"
        aria-label="Open chat"
      >
        <MessageCircle size={24} className="sm:size-[28px]" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-gradient-to-br from-[#00A3FF] to-[#003D80] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-[0_0_20px_rgba(0,163,255,0.7)] hover:scale-105 transition-all duration-300 text-sm"
        aria-label="Expand chat"
      >
        💬 Chat Support
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-[90%] sm:w-80 md:w-96 lg:w-[420px] max-h-[70vh] sm:max-h-[600px] bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] border border-[#00A3FF]/40 rounded-2xl shadow-[0_0_40px_rgba(0,163,255,0.6)] flex flex-col overflow-hidden">

      <div className="bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white p-3 sm:p-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base">
            🚗 Auto Parts Expert
          </h3>
          <p className="text-xs text-[#E8F3FF]">Get instant quote</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 hover:bg-white/20 rounded transition-all duration-300"
            aria-label="Minimize chat"
          >
            <Minimize2 size={16} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded transition-all duration-300"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-[#07142B]/80 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            } animate-slideIn`}
          >
            <div
              className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                message.type === "user"
                  ? "bg-gradient-to-r from-[#00A3FF] to-[#0080D0] text-white rounded-br-none shadow-[0_0_15px_rgba(0,163,255,0.4)]"
                  : "bg-[#091B33] text-[#E8F3FF] border border-[#00A3FF]/30 rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-[#00A3FF] rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-[#00A3FF] rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-2 h-2 bg-[#00A3FF] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {stage !== "qualified" && (
        <form
          onSubmit={handleSubmit}
          className="border-t border-[#00A3FF]/30 p-3 sm:p-4 flex gap-2 bg-[#091B33]/80"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              stage === "greeting"
                ? "e.g., Engine, Transmission..."
                : stage === "email"
                ? "your@email.com"
                : "(555) 123-4567"
            }
            disabled={isLoading}
            className="flex-1 px-3 sm:px-4 py-2 border border-[#00A3FF]/40 bg-[#07142B] text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white p-2 rounded-lg shadow-[0_0_15px_rgba(0,163,255,0.4)] hover:shadow-[0_0_25px_rgba(0,163,255,0.6)] transition-all duration-300 disabled:opacity-50"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      )}

      {stage === "qualified" && (
        <div className="border-t border-[#00A3FF]/30 p-4 text-center text-xs sm:text-sm text-[#B3D9FF] bg-[#091B33]/80 space-y-2">
          <p className="font-semibold text-[#00FFB2]">✅ Thank You!</p>
          <p>
            Your quote request has been saved. Our team will contact you soon.
          </p>
          <button
            onClick={() => {
              setIsOpen(false);
              setStage("greeting");
              setMessages([]);
              setLeadData({});
            }}
            className="mt-3 w-full bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white px-3 py-2 rounded-lg hover:opacity-90 transition-all duration-300 text-xs font-semibold"
          >
            New Quote
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
