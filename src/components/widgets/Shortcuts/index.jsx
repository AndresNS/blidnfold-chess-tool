import React from "react";
import "./styles.css";

// Components
import ShortcutIcon from "../../modules/ShortcutIcon";

// Data
import config from "../../../homepage-config.json";

const Shortcuts = () => {
  const handleOpenAllClick = () =>
    config.shortcuts.map((shortcut) => window.open(shortcut.href, "_blank"));

  return (
    <div className="shortcuts">
      <div className="shortcuts__icons">
        {config.shortcuts
          .filter((shortcut) => shortcut.enabled)
          .map((shortcut, index) => (
            <ShortcutIcon
              name={shortcut.name}
              icon={shortcut.icon}
              href={shortcut.href}
              key={index}
            />
          ))}
      </div>
      <div className="shortcuts__open-all">
        <button onClick={handleOpenAllClick}>Open all</button>
      </div>
    </div>
  );
};

export default Shortcuts;
