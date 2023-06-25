import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Lead from "./Components/Leads/Lead";
import Navigation from "./Components/Navigation";
import UpperNav from "./Components/UpperNav";
import Notification from "./Components/Notification/Notification";
import Settings from "./Components/Settings/Settings";
import Contacts from "./Components/Contacts/Contacts";
import Pipline from "./Components/Leads/components/Pipline";
import Conversation from "./Conversation/Conversation";
import Salesbot from "./Components/Salesbot/Salesbot";
import Reporting from "./Components/Reporting/Reporting";

function App() {
  const dummyPiplines = [
    {
      id: 1,
      name: "Quara",
      phone: "+92123456789",
    },
    {
      id: 2,
      name: "Resdung",
      phone: "+92123456789",
    },
  ];
  const [piplines, setPiplines] = useState(dummyPiplines);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <UpperNav passedFunction={toggleSidebar} />
      <div className="App">
        <Navigation piplines={piplines} isSidebarVisible={isSidebarVisible} />
        <div className="AppContent">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route
              path="/Lead"
              element={<Lead piplines={piplines} setPiplines={setPiplines} />}
            />
            {piplines.map((pipline) => {
              return (
                <>
                  <Route path={`/Lead/${pipline.name}`} Component={Pipline} />
                </>
              );
            })}
            <Route path="/Conversation" Component={Conversation} />
            <Route path="/Salesbot" Component={Salesbot} />
            {piplines.map((pipline) => {
              return (
                <>
                  <Route
                    path={`/Salesbot/${pipline.name}`}
                    Component={Pipline}
                  />
                </>
              );
            })}
            <Route path="/Reporting" Component={Reporting} />
            <Route path="/Contact" Component={Contacts} />
            <Route path="/Notifications" Component={Notification} />
            <Route path="/Settings" Component={Settings} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
