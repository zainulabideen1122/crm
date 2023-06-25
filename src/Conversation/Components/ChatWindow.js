import React, { useEffect, useRef, useState } from "react";
import "../Conversation.css";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdAttachment, MdEmojiEmotions, MdSend } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import userPic from "../../media/user.png";

function ChatWindow({ user, setIsChatOpen, setApplyActiveStyle }) {
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const chatWindowRef = useRef(null);

  const [receiveAMsg, setReceiveAMsg] = useState(false);

  const backToUserListPage = () => {
    setIsChatOpen(false);
    setApplyActiveStyle(false);
  };

  //to recieve a dummy msg when a user sent a mshg

  useEffect(() => {
    const timer = setTimeout(() => {
      const receivedMessage = {
        content: "This is a received message.",
        sender: "other",
        time: "Today at 2 AM",
      };
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [receiveAMsg]);

  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (userMsg.trim() !== "") {
      const sentMessage = {
        content: userMsg,
        sender: "me",
        time: "Today at 2 AM",
      };
      setMessages((prevMessages) => [...prevMessages, sentMessage]);
      setUserMsg("");
      setReceiveAMsg(!receiveAMsg);
    }
  };

  return (
    <div className="chat-window">
      <div className="chatWindowHead">
        <div className="headerIcon1">
          <AiOutlineCaretLeft
            style={{ cursor: "pointer" }}
            onClick={backToUserListPage}
          />
        </div>
        <div className="headerText">
          <p className="userName">{user.name}</p>
          <p className="userPhone">{user.phone}</p>
          <div className="headerBtns">
            <div className="leftBtn">Pipline</div>
            <div className="rightBtn">
              <select>
                <option>Lead Stage</option>
              </select>
            </div>
          </div>
        </div>
        <div className="headerIcon2">
          <BsThreeDots size={25} />
        </div>
      </div>
      <div className="chatWindowBody" ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "me" ? "sentMsg" : "receivedMsg"
            }`}
          >
            <div
              className={`message ${
                message.sender === "me" ? "myMsgCard" : "otherMsgCard"
              }`}
            >
              <img src={userPic} style={{ width: "2.5rem" }} />
              <div className="msgContent">
                <h5>{message.content}</h5>
                <p>{message.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chatWindowFoot">
        <MdAttachment className="chatIcon" size={30} />
        <MdEmojiEmotions className="chatIcon" size={25} />
        <FaRobot className="chatIcon" size={30} />
        <textarea
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
        />
        <MdSend style={{ marginLeft: "2rem" }} className="chatIcon" size={30} />
      </div>
    </div>
  );
}

export default ChatWindow;
