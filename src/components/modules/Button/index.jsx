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
    <button
      className={`button ${className} ${getColorClasses(color)}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
