import React from "react";
import "./styles.css";

const Button = ({ text, onClick }) => {
  const handleClick = () => onClick();

  return (
    <div className="button" onClick={handleClick}>
      {text}
    </div>
  );
};

export default Button;
