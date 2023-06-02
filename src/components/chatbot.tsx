"use client";
import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleUserMessage = () => {
    if (currentMessage.trim() === "") {
      return;
    }

    const response = generateBotResponse(currentMessage);
    setMessages((prevMessages: any) => [
      ...prevMessages,
      currentMessage,
      response,
    ]);
    setCurrentMessage("");
  };

  const generateBotResponse = async (message: string) => {
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      //console.log(response);
      if (response.ok) {
        const data = await response.json();
        return data.response;
      } else {
        throw new Error("Unable to fetch bot response");
      }
    } catch (error) {
      console.error(error);
      return "Error: Unable to fetch bot response";
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
