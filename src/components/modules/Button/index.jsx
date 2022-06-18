import React from "react";
import "./styles.css";

const Button = ({ text, onClick, className, color }) => {
  const handleClick = () => onClick();

  const getColorClasses = (color) => {
    switch (color) {
      case "primary":
        return "button--primary";
      case "secondary":
        return "button--secondary";
      default:
        return "button--primary";
    }
  };
  return (
    <div
      className={`button ${className} ${getColorClasses(color)}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
