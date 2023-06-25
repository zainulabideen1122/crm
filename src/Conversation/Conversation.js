import React, { useState } from "react";
import ChatList from "./Components/ChatList";
import ChatWindow from "./Components/ChatWindow";
import "./Conversation.css";
import { AiOutlineSearch } from "react-icons/ai";

function Conversation() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeChatOption, setActiveChatOption] = useState("All");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [applyActiveStyle, setApplyActiveStyle] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setApplyActiveStyle(true);
  };

  const chatNotification = {
    all: "",
    myLeads: "",
    noReply: "12",
    freeLeads: "1",
  };

  return (
    <>
      <div className="chat-app">
        <div
          className={`chat-sidebar ${
            isChatOpen ? "chatSidebarResponsive" : ""
          }`}
        >
          <h4>Conversations</h4>
          <div className="chatSidebarHead">
            <AiOutlineSearch style={{ color: "gray" }} size={25} />
            <input type="text" placeholder="Search..." />
            <select>
              <option value="">All</option>
            </select>
          </div>

          <div className="chatSidebarSubHead ">
            <div
              onClick={() => setActiveChatOption("All")}
              className={activeChatOption === "All" ? "activeChatOption" : ""}
            >
              <p>
                All
                <span className="msgNotifications">{chatNotification.all}</span>
              </p>
            </div>
            <div
              className={
                activeChatOption === "MyLeads" ? "activeChatOption" : ""
              }
              onClick={() => setActiveChatOption("MyLeads")}
            >
              <p>
                My Leads
                <span className="msgNotifications">
                  {chatNotification.myLeads}
                </span>
              </p>
            </div>
            <div
              className={
                activeChatOption === "NoReply" ? "activeChatOption" : ""
              }
              onClick={() => setActiveChatOption("NoReply")}
            >
              <p>
                No Reply{" "}
                <span className="msgNotifications">
                  {chatNotification.noReply}
                </span>
              </p>
            </div>
            <div
              className={
                activeChatOption === "FreeLeads" ? "activeChatOption" : ""
              }
              onClick={() => setActiveChatOption("FreeLeads")}
            >
              <p>
                Free Leads{" "}
                <span className="msgNotifications">
                  {chatNotification.freeLeads}
                </span>
              </p>
            </div>
          </div>

          <ChatList
            onSelectUser={handleUserClick}
            setIsChatOpen={setIsChatOpen}
            applyActiveClass={applyActiveStyle}
            isChatOpen={isChatOpen}
          />
        </div>
        <div className="chat-main">
          {isChatOpen && (
            <ChatWindow
              user={selectedUser}
              setIsChatOpen={setIsChatOpen}
              setApplyActiveStyle={setApplyActiveStyle}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Conversation;
