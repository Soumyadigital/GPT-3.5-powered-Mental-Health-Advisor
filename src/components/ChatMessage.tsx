import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`flex items-start ${
          isUser ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'
        } rounded-lg p-3 max-w-3/4`}
      >
        {!isUser && <Bot className="mr-2 flex-shrink-0" />}
        <p>{message.text}</p>
        {isUser && <User className="ml-2 flex-shrink-0" />}
      </div>
    </div>
  );
};

export default ChatMessage;