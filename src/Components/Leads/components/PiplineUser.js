import "./Pipline.css";
import userPic from "../../../media/user.png";

function PipelineUser() {
  return (
    <>
      <div className="piplineUserContainer">
        <div className="left">
          <img src={userPic} alt="Profile" className="profile-image" />
          <h5 className="name">Name</h5>
        </div>
        <div className="right">
          <p className="date">Today, 11:55 PM</p>
        </div>
      </div>
    </>
  );
}

export default PipelineUser;
