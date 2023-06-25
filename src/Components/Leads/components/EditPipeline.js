import { useState } from "react";
import { AiOutlineCaretLeft, AiOutlineWhatsApp } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { MdOutlineEdit, MdOutlineClose } from "react-icons/md";

function EditPipeline({ setEditPipeline }) {
  const location = useLocation();
  const piplineName = location.pathname.substring(6);

  return (
    <>
      <div className="editPipelineContainer">
        <div className="editPipelineHeader">
          <div className="backBtn" onClick={() => setEditPipeline(false)}>
            <AiOutlineCaretLeft size={30} />
          </div>
          <h5>Edit "{piplineName}" Pipeline</h5>
        </div>

        <div className="editPipelineBody">
          <div className="editLeftBody">
            <h5>Lead Stages</h5>
            <div className="leadStages">
              <div className="incoming">
                <p>Incoming leads stage</p>
              </div>
              <div className="query">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="30"
                  width="30"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="92" cy="60" r="12"></circle>
                  <circle cx="164" cy="60" r="12"></circle>
                  <circle cx="92" cy="128" r="12"></circle>
                  <circle cx="164" cy="128" r="12"></circle>
                  <circle cx="92" cy="196" r="12"></circle>
                  <circle cx="164" cy="196" r="12"></circle>
                </svg>
                <p>Query</p>
                <section className="stagesRightIcons">
                  <MdOutlineEdit size={25} />
                  <MdOutlineClose size={25} />
                </section>
              </div>
              <div className="testimonials">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="30"
                  width="30"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="92" cy="60" r="12"></circle>
                  <circle cx="164" cy="60" r="12"></circle>
                  <circle cx="92" cy="128" r="12"></circle>
                  <circle cx="164" cy="128" r="12"></circle>
                  <circle cx="92" cy="196" r="12"></circle>
                  <circle cx="164" cy="196" r="12"></circle>
                </svg>
                <p>Testimonials</p>
                <section className="stagesRightIcons">
                  <MdOutlineEdit size={25} />
                  <MdOutlineClose size={25} />
                </section>
              </div>
              <div className="negotiation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="30"
                  width="30"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="92" cy="60" r="12"></circle>
                  <circle cx="164" cy="60" r="12"></circle>
                  <circle cx="92" cy="128" r="12"></circle>
                  <circle cx="164" cy="128" r="12"></circle>
                  <circle cx="92" cy="196" r="12"></circle>
                  <circle cx="164" cy="196" r="12"></circle>
                </svg>
                <p>Negotiation</p>
                <section className="stagesRightIcons">
                  <MdOutlineEdit size={25} />
                  <MdOutlineClose size={25} />
                </section>
              </div>
            </div>

            <div className="finalStages">
              <h5>Final Stages</h5>
              <div className="closedWon">
                <p>Closed - Won</p>
              </div>
              <div className="closedlost">
                <p>Closed - lost</p>
              </div>
            </div>

            <button className="saveBtn">Save</button>
          </div>
          <div className="editRightBody">
            <div className="addLeadStage">
              <h5>Add Lead Stage</h5>
              <div className="addLeadBody">
                <div className="inputContainer">
                  <input type="text" placeholder="Stage Name..." />
                  <MdOutlineEdit size={25} />
                </div>
                <button className="addBtn">Add</button>
              </div>
            </div>
            <div className="pipelinePhoneNum">
              <h5>Pipeline Phone Number</h5>
              <div className="phoneNumberBody">
                <AiOutlineWhatsApp size={30} />
                <p>+921234567890</p>
              </div>
              <button className="reconnectBtn">Reconnect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPipeline;
