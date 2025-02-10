import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyDsmvw8XDk8wemZIUomWkMzqK2zkZqinWw";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const botReply = response.text();

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <IoChatbubbleEllipsesOutline size={32} />
        </button>
      )}

      {isOpen && (
        <div className="w-96 bg-gray-900 text-white shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">AI Chat</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-lg">×</button>
          </div>
          <div className="p-4 h-72 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-4 py-2 rounded-xl max-w-xs text-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-400 text-sm">Bot is typing...</div>}
          </div>
          <div className="p-4 flex border-t border-gray-700 bg-gray-800">
            <input
              type="text"
              className="flex-grow p-3 border-none rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;