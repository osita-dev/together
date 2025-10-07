const ChatPanel = () => {
  return (
    <div className="chat-overlay">
      <aside className="chat">
        <header className="chat__header">Chat</header>

        <div className="chat__messages">
          <div className="chat__message chat__message--user">
            Hey! I’m studying JS tool
          </div>
          <div className="chat__message chat__message--other">
            That’s great! Let’s practice together.
          </div>
        </div>

        <form className="chat__input">
          <input type="text" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </form>
      </aside>
    </div>
  );
};

export default ChatPanel;
