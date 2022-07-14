import React from "react";
import "./styles.css";

const Button = ({ text, onClick, className, color, size }) => {
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

  const getSizeClasses = (size) => {
    switch (size) {
      case "small":
        return "button--small";
      default:
        return "button--normal";
    }
  };
  return (
    <button
      className={`button ${className} ${getColorClasses(
        color
      )} ${getSizeClasses(size)}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
