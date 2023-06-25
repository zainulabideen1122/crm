import { NavLink, useLocation } from "react-router-dom";
import "./Pipline.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { RiFileExcel2Fill } from "react-icons/ri";
import { RxCopy } from "react-icons/rx";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { BiSortAlt2 } from "react-icons/bi";
import PipelineUser from "./PiplineUser";
import { useState } from "react";
import EditPipeline from "./EditPipeline";

function Pipline() {
  const location = useLocation();
  const piplineName = location.pathname.substring(6);
  const IntroUser = ["I1", "I2", "I3", "I4"];
  const TestimonalUser = ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8"];
  const Follow1User = ["I1", "I2", "I3", "I4", "I5", "I6"];
  const Follow2User = ["I1", "I2"];

  const [editPipeline, setEditPipeline] = useState(false);

  return (
    <>
      {!editPipeline && (
        <div className="piplineContainer">
          <div className="piplinePageHeader">
            <div className="piplineHeading">
              <div className="pipelineBackArrow">
                <NavLink to={"/Lead"}>
                  <BsFillCaretLeftFill style={{ color: "black" }} size={25} />
                </NavLink>
              </div>
              <h4>{piplineName} Pipeline</h4>
            </div>
            <div className="pipelineHeaderIcons">
              <p className="pipelineExcelIcon">
                <RiFileExcel2Fill size={25} />
              </p>
              <p className="pipelineDriverIcon">
                <HiWrenchScrewdriver
                  size={20}
                  onClick={() => setEditPipeline(true)}
                />
              </p>
              <p className="pipelineCopyIcon">
                <RxCopy />
              </p>
              <p>
                <BiSortAlt2 size={20} />
              </p>
            </div>
          </div>

          <div className="pipelineContent">
            <h5>Leads Active : 20</h5>
            <div className="pipelineContentHeader">
              <div className="pipelineIntro">
                <h5>Introduction</h5>
                <p>4 Leads</p>
              </div>
              <div className="pipelineTestimonal">
                <h5>Testimonial</h5>
                <p>8 Leads</p>
              </div>
              <div className="pipelineFollow1">
                <h5>Follow Up 1</h5>
                <p>6 Leads</p>
              </div>
              <div className="pipelineFollow2">
                <h5>Follow Up 2</h5>
                <p>2 Leads</p>
              </div>
            </div>
            <div className="pipelineContentBody">
              <div>
                {IntroUser.map((iU) => {
                  return (
                    <>
                      <PipelineUser />
                    </>
                  );
                })}
              </div>
              <div>
                {TestimonalUser.map((iU) => {
                  return (
                    <>
                      <PipelineUser />
                    </>
                  );
                })}
              </div>
              <div>
                {Follow1User.map((iU) => {
                  return (
                    <>
                      <PipelineUser />
                    </>
                  );
                })}
              </div>

              <div>
                {Follow2User.map((iU) => {
                  return (
                    <>
                      <PipelineUser />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {editPipeline && <EditPipeline setEditPipeline={setEditPipeline} />}
    </>
  );
}

export default Pipline;
