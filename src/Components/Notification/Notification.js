import React, { useState } from "react";
import "./Notification.css";
import Notify from "./components/Notify";

function Notification() {
  const [notifications, setNotifications] = useState(["N1", "N2", "N3", "N4"]);

  return (
    <>
      <div className="notifications">
        <h5 className="notificationHeading">Notifications</h5>
        {notifications.map((notification) => (
          <Notify key={notification} notification={notification} />
        ))}
      </div>
    </>
  );
}

export default Notification;
