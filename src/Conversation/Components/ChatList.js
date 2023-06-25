import React, { useState } from "react";
import ChatUser from "./ChatUser";
import "../Conversation.css";

function ChatList({
  onSelectUser,
  setIsChatOpen,
  applyActiveClass,
  isChatOpen,
}) {
  const [activeUserId, setActiveUserId] = useState(null);
  const users = [
    {
      id: 1,
      name: "Syed M. Sannan",
      lastMessage: "This is the last message from syed",
      date: "Today, 11:55PM",
      phone: "+92123456789",
    },
    {
      id: 2,
      name: "Abdullah Ranjha",
      lastMessage: "This is the last message from abdullah",
      date: "Today, 11:55PM",
      phone: "+92123456789",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      lastMessage: "This is the last message from Ahmad",
      date: "Today, 11:55PM",
      phone: "+92123456789",
    },
    // Add more users here
  ];

  const handleUserClick = (user) => {
    onSelectUser(user);
    setIsChatOpen(true);
    setActiveUserId(user.id);
  };

  return (
    <ul className="chat-user-list">
      {users.map((user) => (
        <ChatUser
          key={user.id}
          user={user}
          isActive={activeUserId === user.id && applyActiveClass}
          onClick={() => handleUserClick(user)}
          isChatOpen={isChatOpen}
        />
      ))}
    </ul>
  );
}

export default ChatList;
