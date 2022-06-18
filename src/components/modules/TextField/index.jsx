import React from "react";
import "./styles.css";

const TextField = ({
  className,
  placeholder,
  onChange,
  value,
  name,
  forwardRef,
}) => {
  return (
    <input
      className={`textfield ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      ref={forwardRef}
    />
  );
};

export default TextField;
