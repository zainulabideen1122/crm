import React, { useState } from "react";
import "../Conversation.css";
import userPic from "../../media/user.png";

function ChatUser({ user, isActive, onClick, isChatOpen }) {
  const userTagsDummy = [
    {
      name: "NURUL",
      Color: "red",
    },
    {
      name: "QUARA",
      Color: "Blue",
    },
  ];
  const [userTags, setUserTags] = useState(userTagsDummy);
  const updatedLastMsg = user.lastMessage.slice(0, 30) + "...";

  const shortName = user.name.split(" ")[0];

  const userClassName = isActive ? "chat-user selectedUserChat" : "chat-user";

  return (
    <>
      <li className={userClassName} onClick={onClick}>
        <div className="user-avatar">
          <img style={{ width: "3rem" }} src={userPic} />
        </div>
        <div className="user-info">
          <div className="nameAndDate">
            <h5 style={{ fontWeight: "bold" }}>{shortName}</h5>
            {!isChatOpen &&
              userTags.map((tag) => {
                return (
                  <>
                    <div
                      className="userTag"
                      style={{ backgroundColor: "dark" + tag.Color }}
                    >
                      {tag.name}
                    </div>
                  </>
                );
              })}
            <p>{user.date}</p>
          </div>
          <p>{updatedLastMsg}</p>
        </div>
      </li>
    </>
  );
}

export default ChatUser;
