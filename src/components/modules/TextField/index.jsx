import React from "react";
import "./styles.css";

const TextField = ({ className }) => {
  return <input className={`textfield ${className}`} type="text" />;
};

export default TextField;
