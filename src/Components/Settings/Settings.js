import React, { useState } from "react";
import "./Settings.css";
import userPic from "../../media/user.png";
import { MdEdit, MdAddCircle } from "react-icons/md";

function Settings() {
  const userData = [
    {
      name: "Tirmizi",
      leads: "Read",
      conversation: "Write",
      salesbot: "Delete",
      reporting: "None",
    },
    {
      name: "Syed",
      leads: "Accepted Only",
      conversation: "Accepted Only",
      salesbot: "None",
      reporting: "None",
    },
  ];

  const [passwordChange, setPasswordChange] = useState("");
  const [users, setUsers] = useState(userData);
  const [piplines, setPiplines] = useState([
    "Quara",
    "Resdung",
    "Zain",
    "Ok",
    "Ok",
    "Ok",
  ]);

  return (
    <>
      {/* -------------------  Settings Section ---------------------*/}
      <div className="mainContainer">
        <div className="settings">
          <h5>Settings</h5>
          <div className="settingsContent">
            <h6>Change Password</h6>
            <input
              type="text"
              placeholder="New Password"
              value={passwordChange}
              onChange={(e) => setPasswordChange(e.target.content)}
            />
          </div>
          <button className="SaveBtn">Save</button>
        </div>

        {/* -------------------  Profile Section ---------------------*/}
        <div className="profile">
          <h5>Profile</h5>
          <div className="profileContent" >
            <img src={userPic} style={{ width: "3.5rem" }} alt="userImg" />

            <div className="userInfo">
              <ul>
                <li>Jhon Smith</li>
                <span className="updateIcon">
                  <MdEdit />
                </span>
              </ul>
              <ul>
                <li>test@example.com</li>
                <span className="updateIcon">
                  <MdEdit />
                </span>
              </ul>
              <ul>
                <li>+920000000000</li>
                <span className="updateIcon">
                  <MdEdit />
                </span>
              </ul>
            </div>
          </div>
          <button className="SaveBtn">Save</button>
        </div>

        {/* -------------------  User Permissions Section ---------------------*/}
        <div className="userPermissions">
          <div className="userPermissionHeader">
            <h5>Users and User Permissions</h5>
            <p onClick={() => console.log("CLICKED!!!")}>
              <MdAddCircle
                size={28}
                style={{ color: "#3867d6", cursor: "pointer" }}
              />
            </p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Leads</th>
                <th>Conversations</th>
                <th>Salesbot</th>
                <th>Reporting</th>
                {piplines.map((pipline) => {
                  return (
                    <>
                      <th>{pipline}</th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <>
                    <tr key={user.id}>
                      <td>1</td>
                      <td>{user.name}</td>
                      <td>
                        <select>
                          <option value="Read">{user.leads}</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="Write">{user.conversation}</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="Delete">{user.salesbot}</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="None">{user.reporting}</option>
                        </select>
                      </td>

                      {piplines.map((pipline) => {
                        return (
                          <>
                            <td key={pipline.id}>
                              <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <button className="SaveBtn">Save</button>
        </div>
      </div>
    </>
  );
}

export default Settings;
