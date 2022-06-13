import React from "react";
import "./styles.css";

const ShortcutIcon = ({ name, icon, href }) => {
  return (
    <a className="shortcut-icon" href={href}>
      <img
        className="shortcut-icon__image"
        src={`shortcuts/${icon}`}
        alt={name}
      />
    </a>
  );
};

export default ShortcutIcon;
