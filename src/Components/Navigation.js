import React, { useEffect, useState } from "react";
import "../styling/App.css";
import {
  AiOutlinePlus,
} from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

import homeIcon from "../media/home_1.svg";
import leadIcon from "../media/mdi_leads.svg";
import conversationIcon from "../media/material-symbols_chat.svg";
import salesbotIcon from "../media/fa6-solid_robot.svg";
import reportingIcon from "../media/ic_baseline-assessment.svg";
import contactIcon from "../media/mdi_contact.svg";
import notificationIcon from "../media/mdi_bell.svg";
import settingsIcon from "../media/material-symbols_settings.svg";

function Navigation({ piplines, isSidebarVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    setIsHovered(!isSidebarVisible);
  }, [isSidebarVisible]);

  let sectionClass = "sideMenu";
  if (isHovered && !isSidebarVisible) {
    sectionClass += " expanded";
  } else if (isHovered) {
    sectionClass += " expanded";
  }

  return (
    <>
      <section
        className={sectionClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="menuList">
          <li
            className={`menuItem ${location.pathname == "/" ? "activity" : ""}`}
          >
            <NavLink to="/">
              <div >
                <img
                  src={homeIcon}
                  style={{ width: "35px" }}
                  className={`menuIcon`}
                />
              </div>
              {isHovered && <span className="menuText">Home</span>}
            </NavLink>
          </li>
          {/* ---------------------- Leads ---------------------- */}
          <li
            className={`menuItem ${
              location.pathname.includes("/Lead") ? "activity" : ""
            }`}
          >
            <NavLink exact to="/Lead">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ display: "flex" }}>
                  <div style={{marginLeft:"0px"}}>
                    <img
                      src={leadIcon}
                      style={{ width: "30px" }}
                      className={`menuIcon`}
                    />
                  </div>
                  {isHovered && <span className="menuText">Leads</span>}
                </span>

                {isHovered && (
                  <ul className="subList">
                    {piplines.map((pipline) => {
                      return (
                        <>
                          <li
                            className={`menuItem ${
                              location.pathname.includes(
                                "/Lead/" + pipline.name
                              )
                                ? "subActivity"
                                : ""
                            }`}
                          >
                            <NavLink to={`/Lead/${pipline.name}`}>
                              {pipline.name}
                            </NavLink>
                          </li>
                        </>
                      );
                    })}
                    <li
                      className={`menuItem ${
                        location.pathname === "/Lead" ? "subActivity" : ""
                      }`}
                    >
                      <NavLink to={`/Lead`}>
                        Add a New pipline
                        <AiOutlinePlus
                          style={{ marginLeft: "0.5rem" }}
                          size={15}
                        />
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </NavLink>
          </li>
          <li
            className={`menuItem ${
              location.pathname === "/Conversation" ? "activity" : ""
            }`}
          >
            <NavLink exact to="/Conversation">
              <div>
                <img
                  src={conversationIcon}
                  style={{ width: "35px" }}
                  className={`menuIcon`}
                />
              </div>
              {isHovered && <span className="menuText">Conversation</span>}
            </NavLink>
          </li>
          <li
            className={`menuItem ${
              location.pathname === "/Salesbot" ? "activity" : ""
            }`}
          >
            <NavLink exact to="/Salesbot">
              <div>
                <img
                  src={salesbotIcon}
                  style={{ width: "35px" }}
                  className={`menuIcon`}
                />
              </div>
              {isHovered && <span className="menuText">Salesbot</span>}
            </NavLink>
          </li>
          <li
            className={`menuItem ${
              location.pathname === "/Reporting" ? "activity" : ""
            }`}
          >
            <NavLink exact to="/Reporting">
              <div>
                <img
                  src={reportingIcon}
                  style={{ width: "35px" }}
                  className={`menuIcon`}
                />
              </div>
              {isHovered && <span className="menuText">Reporting</span>}
            </NavLink>
          </li>
          <li
            className={`menuItem ${
              location.pathname === "/Contact" ? "activity" : ""
            }`}
          >
            <NavLink exact to="/Contact">
              <div>
                <img
                  src={contactIcon}
                  style={{ width: "35px" }}
                  className={`menuIcon`}
                />
              </div>
              {isHovered && <span className="menuText">Contacts</span>}
            </NavLink>
          </li>
          <span className="lastTwoChild">
            <li
              style={{ marginTop: "0rem" }}
              className={`menuItem ${
                location.pathname === "/Notifications" ? "activity" : ""
              }`}
            >
              <NavLink exact to="/Notifications">
                <div>
                  <img
                    src={notificationIcon}
                    style={{ width: "30px" }}
                    className={`menuIcon`}
                  />
                </div>
                {isHovered && <span className="menuText">Notifications</span>}
              </NavLink>
            </li>
            <li
              className={`menuItem ${
                location.pathname === "/Settings" ? "activity" : ""
              }`}
            >
              <NavLink exact to="/Settings">
                <div>
                  <img
                    src={settingsIcon}
                    style={{ width: "35px" }}
                    className={`menuIcon`}
                  />
                </div>
                {isHovered && <span className="menuText">Settings</span>}
              </NavLink>
            </li>
          </span>
        </ul>
      </section>
    </>
  );
}

export default Navigation;
