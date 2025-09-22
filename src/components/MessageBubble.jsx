import './MessageBubble.css';

function MessageBubble({ message }) {
  return (
    <div className={`message-bubble ${message.sender}`}>
      <div className="message-content">
        <div className="message-text">{message.text}</div>
        <div className="message-timestamp">{message.timestamp}</div>
      </div>
    </div>
  );
}

export default MessageBubble;