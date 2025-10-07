
const SidebarPanel = ({
  roomId = "xyz12345",
  connectedUsers = ["You", "User B"],
  onCopyRoomId,
  onUploadPDF,
  resources = [
    { label: "W3Schools", link: "https://www.w3schools.com" },
    { label: "JSchools", link: "#" },
  ],
}) => {
  const handleCopy = () => {
    if (onCopyRoomId) onCopyRoomId();
    navigator.clipboard.writeText(roomId);
  };

  return (
    <aside className="sidebar">
      {/* Room Info */}
      <div className="sidebar__room-info">
        <h3 className="sidebar__room-id">Room {roomId}</h3>
        <button className="sidebar__copy-btn" onClick={handleCopy}>
          Copy
        </button>
      </div>

      {/* Connected Users */}
      <div className="sidebar__users">
        <h4 className="sidebar__users-count">
          {connectedUsers.length} connected
        </h4>
        <ul className="sidebar__user-list">
          {connectedUsers.map((user, index) => (
            <li key={index} className="sidebar__user">
              <span className="sidebar__user-icon">👤</span> {user}
            </li>
          ))}
        </ul>
      </div>

      {/* External Resources */}
      <div className="sidebar__resources">
        {resources.map((res, index) => (
          <a
            key={index}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar__resource-btn"
          >
            {res.label}
          </a>
        ))}
        <button className="sidebar__upload-btn" onClick={onUploadPDF}>
          Upload PDF
        </button>
      </div>
    </aside>
    
  );
};

export default SidebarPanel;
