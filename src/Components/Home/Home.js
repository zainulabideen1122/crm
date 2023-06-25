import "./Home.css";
import PerformanceCard from "./PerformanceCard";
import { IoMdPerson } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import {
  AiOutlinePercentage,
  AiOutlineCaretUp,
  AiOutlineCaretDown,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="HomeContainer">
        <h1>Welcome back, John.</h1>
        <div className="homeContent">
          <div className="homeLeftBody">
            <div className="leftBodyHeader">
              <h5>Performance</h5>
              <select>
                <option value="">This Month</option>
              </select>
            </div>

            <div className="homeLeftBodyContent">
              <div className="leadsContainer">
                <PerformanceCard
                  icon={<IoMdPerson size={30} />}
                  number={"172"}
                  cardName={"leads"}
                  color={"leadsColor"}
                />
              </div>
              <div className="closedBlock">
                <PerformanceCard
                  icon={<FaDollarSign size={30} />}
                  number={"63"}
                  cardName={"Closed"}
                  color={"closedColor"}
                />
              </div>
              <div className="closedRateBlock">
                <PerformanceCard
                  icon={<AiOutlinePercentage size={30} />}
                  number={"36%"}
                  cardName={"Closed Rate"}
                  color={"closedRateColor"}
                />
              </div>
            </div>

            <div className="leftBodyFooter">
              <div className="leftBar">
                <div
                  className="barPercent"
                  style={{ backgroundColor: "#3498db" }}
                >
                  <p>37%</p>
                </div>
                <p style={{ width: "75%" }}>Resdeng</p>
              </div>
              <div className="rightBar">
                <div
                  className="barPercent"
                  style={{ backgroundColor: "#f1c40f" }}
                >
                  <p>63%</p>
                </div>
                <p style={{ width: "75%" }}>Quara</p>
              </div>
            </div>
          </div>
          <div className="homeRightBody">
            <h5>Daily Activity Report</h5>
            <div className="reportBody">
              <div className="leadsReport">
                <div className="ReportIcon">
                  <div style={{ backgroundColor: "#20bf6b" }}>
                    <AiOutlineCaretUp />
                  </div>
                  <p>12</p>
                </div>
                <p className="reportName">Leads</p>
              </div>
              <div className="closedReports">
                <div className="ReportIcon">
                  <div style={{ backgroundColor: "#e74c3c" }}>
                    <AiOutlineCaretDown />
                  </div>
                  <p>2</p>
                </div>
                <p className="reportName">Closed</p>
              </div>
              <div className="closedRateReports">
                <div className="ReportIcon">
                  <div style={{ backgroundColor: "#e74c3c" }}>
                    <AiOutlineCaretDown />
                  </div>
                  <p>12%</p>
                </div>
                <p className="reportName">Closed Rate</p>
              </div>
              <div className="avgResp">
                <p>
                  <span style={{ color: "#20bf6b", paddingRight: "10px" }}>
                    1 hour
                  </span>{" "}
                  Avg. Response Time
                </p>
              </div>
              <div className="responseRate">
                <p>
                  <span style={{ color: "#20bf6b", paddingRight: "10px" }}>
                    95%
                  </span>{" "}
                  Response Rate
                </p>
              </div>
              <button className="viewFullReportBtn"> VIEW FULL REPORT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
