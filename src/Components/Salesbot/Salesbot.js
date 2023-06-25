import { useState } from "react";
import "./Salesbot.css";
import { AiFillSmile } from "react-icons/ai";
import { MdOutlineAttachment } from "react-icons/md";

function Salesbot() {
  const pipelinesData = [
    {
      name: "Quara",
    },
    {
      name: "Resdung",
    },
  ];

  const salesbotDummy = [
    {
      status: "Incoming query",
      msgs: [
        "First Message",
        "Message 2 sent right after message one.",
        "Message 3 automatically sent right after message two.",
      ],
    },
    {
      status: "Testimonial",
      msgs: ["Testimonial Message content"],
    },
  ];

  const [pipelines, setPipelines] = useState(pipelinesData);
  const [toGoPipeline, setToGoPipeline] = useState("");
  const [openPipelineComponent, setOpenPipelineComponent] = useState(false);
  const [salesBotData, setSalesBotData] = useState(salesbotDummy);

  return (
    <>
      {!openPipelineComponent && (
        <div className="salesBotContainer">
          <h5>Manage Pipeline</h5>
          <div className="salesbotInput">
            <select onChange={(e) => setToGoPipeline(e.target.value)}>
              <option>Select Pipline</option>
              {pipelines.map((pipeline) => {
                return (
                  <>
                    <option key={pipeline.name} value={pipeline.name}>
                      {pipeline.name}
                    </option>
                  </>
                );
              })}
            </select>
            <button
              className="selectBtn"
              onClick={() => setOpenPipelineComponent(true)}
            >
              Select
            </button>
          </div>
        </div>
      )}

      {openPipelineComponent && (
        <div className="manageSalesBot">
          <div className="manageSalesBotHeader">
            <h5>Manage Salesbot for pipeline '{toGoPipeline}'</h5>
            <button className="saveBtn">Save</button>
          </div>
          <div className="manageSalesbotBody" style={{ overflowX: "auto" }}>
            {salesBotData.map((data) => {
              let statusColor = "";

              if (data.status === "Incoming query") {
                statusColor = "queryColor";
              } else if (data.status === "Testimonial") {
                statusColor = "testimonialColor";
              } else {
                statusColor = "defaultColor";
              }

              return (
                <>
                  <div key={data.status} className="salesbotStatusContainer">
                    <h5 className={`${statusColor}`}>Status: {data.status}</h5>
                    {data.msgs.map((msg) => {
                      return (
                        <>
                          <div className={`salesbotStatusBody ${statusColor}`}>
                            <div className="salesbotStatusInnerBody">
                              <div className="upperInnerBody">
                                <div className="InnerBodyHeader">
                                  <p>{msg}</p>
                                  <span className="innerBodyfaceIcon">
                                    <AiFillSmile />
                                  </span>
                                </div>
                                <div className="addAttachment">
                                  <span>
                                    <MdOutlineAttachment />
                                  </span>
                                  <p>Add Attachment</p>
                                </div>
                              </div>
                              <div className="lowerInnerBody">
                                <div>
                                  <p>Message Sequence</p>
                                  <input value="1" type="text" />
                                </div>
                                <div>
                                  <p>Action Timeout</p>
                                  <select className="lowerBodyOptions">
                                    <option>Instant</option>
                                  </select>
                                </div>
                                <div>
                                  <p>Action</p>
                                  <select className="lowerBodyOptions">
                                    <option>
                                      Followup message sequence: 3
                                    </option>
                                  </select>
                                </div>
                                <div>
                                  <p>Auto-delay Time</p>
                                  <select className="lowerBodyOptions">
                                    <option>1 Second</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Salesbot;
