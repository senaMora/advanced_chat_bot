import { useState } from 'react';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your advanced chat bot. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = (messageText) => {
    if (messageText.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userMessage) => {
    const responses = [
      "That's an interesting question! Let me think about that.",
      "I understand what you're saying. Could you tell me more?",
      "Thanks for sharing that with me. How else can I assist you?",
      "I'm here to help! What would you like to know?",
      "That sounds important. Let me help you with that.",
      "I appreciate you reaching out. Is there anything specific you'd like to discuss?"
    ];
    
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello there! It's great to meet you. What can I do for you today?";
    } else if (lowerMessage.includes('help')) {
      return "I'm here to help! You can ask me questions, have a conversation, or just chat. What's on your mind?";
    } else if (lowerMessage.includes('how are you')) {
      return "I'm doing great, thank you for asking! I'm here and ready to help. How are you doing?";
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! It was nice chatting with you. Feel free to come back anytime!";
    } else if (lowerMessage.includes('what') && lowerMessage.includes('do')) {
      return "I can help you with various things! I can answer questions, have conversations, provide information, or just chat. What interests you?";
    } else if (lowerMessage.includes('thank')) {
      return "You're very welcome! I'm happy to help. Is there anything else you'd like to discuss?";
    } else if (lowerMessage.includes('something')) {
      return "Of course! I'd be happy to help you with something. What do you need assistance with?";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h2>Advanced Chat Bot</h2>
        <p>AI-powered conversation assistant</p>
      </div>
      <ChatMessages messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatBot;