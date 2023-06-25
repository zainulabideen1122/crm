import React, { useState } from "react";
import "./Lead.css";

function Lead({ piplines, setPiplines }) {
  const [piplineName, setPiplineName] = useState("");
  const [whatsappNum, setWhatsappNum] = useState("");

  function savePipline() {
    const lastObject = piplines[piplines.length - 1];
    const lastObjectId = lastObject ? lastObject.id : null;

    const newPipline = {
      id: lastObjectId + 1,
      name: piplineName,
      phone: whatsappNum,
    };

    const updatedPiplines = [...piplines, newPipline];
    setPiplines(updatedPiplines);

    setPiplineName("");
    setWhatsappNum("");
  }

  return (
    <>
      <div className="leadContainer">
        <h3>Add a New Pipline</h3>
        <div className="leadInputs">
          <input
            type="text"
            value={piplineName}
            onChange={(e) => setPiplineName(e.target.value)}
            placeholder="Pipline Name..."
          />
          <div className="whatsappNum">
            <input
              type="text"
              placeholder="Assigned Number..."
              value={whatsappNum}
              onChange={(e) => setWhatsappNum(e.target.value)}
            />
            <p>Whatsapp Business Only</p>
          </div>
        </div>
        <button
          className="SaveBtn"
          style={{ marginLeft: "auto", padding: "0.7rem 2rem" }}
          onClick={savePipline}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Lead;
