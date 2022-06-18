import React from "react";
import "./styles.css";

const TextField = ({ className, placeholder, onChange, value }) => {
  return (
    <input
      className={`textfield ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextField;
