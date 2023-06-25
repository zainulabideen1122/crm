import "./Reporting.css";
import PerformanceCard from "../Home/PerformanceCard";
import { IoMdPerson } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import {
  AiOutlinePercentage,
  AiFillClockCircle,
  AiFillCaretUp,
} from "react-icons/ai";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useState } from "react";

function Reporting() {
  const pipelineDummy = [
    {
      name: "Quara",
      percent: "63%",
    },
    {
      name: "Resdeng",
      percent: "37%",
    },
  ];

  const staffPerformancesDummy = [
    {
      pipeline: "Quara",
      staff: "Syed",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "1 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Resdung",
      staff: "Syed",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "7 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Quara",
      staff: "Nurul",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "1 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Resdung",
      staff: "Tirmidih",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "6 hour",
      respRate: "45%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Resdung",
      staff: "Ahmad",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "1 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Quara",
      staff: "Kashif",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "1 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
    {
      pipeline: "Random",
      staff: "Kashif",
      leads: 100,
      closed: 31,
      closedRate: "31%",
      avgResponse: "1 hour",
      respRate: "95%",
      avgResponseColor: "",
      leadsColor: "red",
      respRateColor: "",
    },
  ];

  const [pipelineData, setPipelineData] = useState(pipelineDummy);
  const [staffPerformances, setStaffPerformances] = useState(
    staffPerformancesDummy
  );

  return (
    <>
      <div className="reportingContainer">
        <div className="reportingHead">
          <h5>Overall Performance</h5>
          <div className="reportFilters">
            <div className="excelDiv">
              <RiFileExcel2Fill size={20} />
              <p>Export to Excel</p>
            </div>
            <div className="pipelineFilter">
              <p>Pipeline Filter</p>
              <select>
                <option>All</option>
              </select>
            </div>
            <div className="timeFilter">
              <p>Time Filter</p>
              <select>
                <option>Today</option>
              </select>
            </div>
          </div>
        </div>
        <div className="reportContent">
          <div className="reportLeftBody">
            <div className="leftBodyContent">
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
          </div>
          <div className="reportRightBody">
            <h5>Daily Activity Report</h5>
            <div className="reportingBody">
              {pipelineData.map((pipeline) => {
                return (
                  <>
                    <div className="pipelineReport">
                      <div className="reportPercent">{pipeline.percent}</div>
                      <p>{pipeline.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="responseContainer">
          <div className="respTime">
            <div className="respIcon">
              <AiFillClockCircle size={25} />
            </div>
            <div className="respText">
              <h3>1 Hour</h3>
              <p>avg. response time</p>
            </div>
          </div>
          <div className="respRate">
            <div className="respIcon">
              <AiOutlinePercentage size={25} />
            </div>
            <div className="respText">
              <h3>95%</h3>
              <p>response rate</p>
            </div>
          </div>
        </div>

        <div className="performanceByStaff">
          <div className="performanceByStaffHeader">
            <h3>Performance by Staff</h3>
            <div className="reportFilters">
              <div className="excelDiv">
                <RiFileExcel2Fill size={20} />
                <p>Export to Excel</p>
              </div>
              <div className="pipelineFilter">
                <p>Pipeline Filter</p>
                <select>
                  <option>Mixed</option>
                </select>
              </div>
              <div className="timeFilter">
                <p>Time Filter</p>
                <select>
                  <option>Today</option>
                </select>
              </div>
            </div>
          </div>
          <div className="performanceByStaffBody">
            <div className="performancePipeline">
              <div
                className="performancePipelineHeading"
                style={{ overflowX: "auto" }}
              >
                <h5>Pipeline</h5>
                {staffPerformances.map((performance) => {
                  return (
                    <>
                      <p>{performance.pipeline}</p>
                    </>
                  );
                })}
              </div>
              {}
            </div>
            <div className="performanceHeadingList">
              <table>
                <thead>
                  <tr>
                    <th style={{ borderRadius: "5px 0 0 5px" }}>Staff</th>
                    <th>Leads</th>
                    <th>Closed</th>
                    <th>Closed Rate</th>
                    <th>Avg. Response Time</th>
                    <th style={{ borderRadius: "0 5px 5px 0" }}>
                      Response Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffPerformances.map((performance) => (
                    <tr key={performance.staff}>
                      <td style={{ color: "#0831fff0", fontWeight: "bold" }}>
                        {performance.staff}
                      </td>
                      <td>
                        {performance.leads}
                        <AiFillCaretUp
                          style={{ color: `${performance.leadsColor}` }}
                        />
                      </td>
                      <td>{performance.closed}</td>
                      <td>{performance.closedRate}</td>
                      <td>{performance.avgResponse}</td>
                      <td>{performance.respRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reporting;
