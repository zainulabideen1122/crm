function PerformanceCard({ icon, number, cardName, color }) {
  return (
    <>
      <div className={`performanceCardContainer ${color}`}>
        <div className="leadsContainerHead">
          <p className="headIcon">{icon}</p>
        </div>
        <div className="leadsContainerHead">
          <h1>{number}</h1>
        </div>
        <div className="leadsContainerHead">
          <p style={{ paddingBottom: "0.5rem" }}>{cardName}</p>
        </div>
      </div>
    </>
  );
}

export default PerformanceCard;
