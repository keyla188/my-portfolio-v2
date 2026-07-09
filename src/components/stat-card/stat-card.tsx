import type { StatItem } from "../../types/stats";
import "./stat-card.css";

const StatCard = ({ value, label }: StatItem) => {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__label">{label}</p>
    </div>
  );
};

export default StatCard;
