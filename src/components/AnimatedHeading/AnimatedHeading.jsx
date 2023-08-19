import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const AnimatedHeadings = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="link">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </div>
  );
};

export default AnimatedHeadings;
