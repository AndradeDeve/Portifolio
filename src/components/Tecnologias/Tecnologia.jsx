import "./Tecnologia.css";
import { useEffect } from "react";

export default function Tecnologia({ tecnologia, index }) {
  return (
    <div
      className="tech-card"
      style={{ animationDelay: `${index * 0.50}s` }}
    >
      <img src={tecnologia.image} alt={tecnologia.alt} />
    </div>
  );
}
