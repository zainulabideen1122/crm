import React from "react";
import "../Notification.css";
import userPic from "../../../media/user.png";

function Notify() {
  return (
    <>
      <div className="Card">
        <img
          className="cardImage"
          src={userPic}
          style={{ width: "4rem" }}
          alt="userPic"
        />
        <div className="cardContent">
          <h5>Notification Title</h5>
          <p>
            malesuada fames ac turpis egestas integer eget aliquet nibh praesent
          </p>
        </div>
      </div>
    </>
  );
}

export default Notify;
