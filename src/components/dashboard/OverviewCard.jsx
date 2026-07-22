import "./OverviewCard.css";

function OverviewCard({ title, value, subtitle }) {
  return (
    <div className="overview-card">

      <h3>{title}</h3>

      <h1>{value}</h1>

      <p>{subtitle}</p>

    </div>
  );
}

export default OverviewCard;