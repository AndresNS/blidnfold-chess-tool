import React from "react";
import "./styles.css";

// Components
import ShortcutIcon from "../../modules/ShortcutIcon";

// Data
import config from "../../../homepage-config.json";

const Shortcuts = () => {
  return (
    <div className="shortcuts">
      {config.shortcuts
        .filter((shortcut) => shortcut.enabled)
        .map((shortcut, index) => (
          <ShortcutIcon
            name={shortcut.name}
            href={shortcut.href}
            icon={shortcut.icon}
            key={index}
          />
        ))}
    </div>
  );
};

export default Shortcuts;
