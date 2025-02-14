"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { FaComments } from "react-icons/fa"; // Import an icon

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false); // Track chat visibility
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  const chatContainer = useRef(null);

  const scroll = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <div>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        <FaComments />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            maxHeight: "500px",
            backgroundColor: "#1e1e1e",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #444",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              color: "#fff",
            }}
          >
            <h3>Talk to Vence</h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div
            ref={chatContainer}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              backgroundColor: "#2c2c2c",
              borderRadius: "5px",
              maxHeight: "300px",
            }}
          >
            {messages.map((m, index) => (
              <div
                key={index}
                style={{
                  maxWidth: "80%",
                  padding: "10px 15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  backgroundColor: m.role === "user" ? "#007bff" : "#444",
                  color: "#fff",
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  textAlign: "left",
                  wordWrap: "break-word",
                  whiteSpace: "pre-line",
                  fontSize: "55%",
                  lineHeight: "1.4"
                }}
              >
                {m.content}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", marginTop: "10px" }}
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                color: "blue",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "5px 10px",
                marginLeft: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "55%"
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
