import React from "react";
import "../styling/App.css";
import { useLocation } from "react-router-dom";
import { FaCaretDown, FaBars } from "react-icons/fa";
import userProfile from "../media/user.png";

function UpperNav({ passedFunction }) {
  const location = useLocation();
  const path = location.pathname.substring(1);

  function handleNavigationBtn() {
    passedFunction();
  }

  return (
    <>
      <section className="navBar">
        <div className="navbarContent">
          <div className="websiteLogo">
            <h1>Logo</h1>
          </div>
          <div className="activePage">
            <p>{path ? path : "Home"}</p>
          </div>
        </div>
        <div className="navbarUser">
          <div className="userContent">
            <img
              className="userImage"
              style={{ float: "right" }}
              src={userProfile}
              alt="UserPic"
              width={"15%"}
            />
            <p>Jhon smith</p>
            <p>
              <FaCaretDown />
            </p>
          </div>
          <div className="navigationBtn" onClick={handleNavigationBtn}>
            <FaBars size={25} />
          </div>
        </div>
      </section>
    </>
  );
}

export default UpperNav;
